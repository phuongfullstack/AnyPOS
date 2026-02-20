/**
 * Background sync worker - polls sync queue and pushes to middleware.
 * Uses exponential backoff for retries.
 */

import type BetterSqlite3 from 'better-sqlite3';

const SYNC_INTERVAL_MS = 10_000;       // 10 seconds
const BASE_DELAY_MS = 5_000;           // 5 seconds base backoff
const MAX_RETRY_DELAY_MS = 3_600_000;  // 1 hour max

interface SyncQueueRow {
  id: number;
  retry_count: number;
  payload: string;
}

/**
 * Calculate exponential backoff delay.
 */
export function getBackoffDelay(retryCount: number): number {
  const delay = Math.pow(2, retryCount) * BASE_DELAY_MS;
  return Math.min(delay, MAX_RETRY_DELAY_MS);
}

/**
 * SyncWorker manages background synchronization of the local queue to middleware.
 */
export class SyncWorker {
  private readonly db: BetterSqlite3.Database;
  private readonly middlewareBaseUrl: string;
  private running = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(db: BetterSqlite3.Database, middlewareBaseUrl: string) {
    this.db = db;
    this.middlewareBaseUrl = middlewareBaseUrl;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.scheduleNext();
  }

  stop(): void {
    this.running = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private scheduleNext(): void {
    if (!this.running) return;
    this.timer = setTimeout(async () => {
      await this.processSyncQueue();
      this.scheduleNext();
    }, SYNC_INTERVAL_MS);
  }

  private async processSyncQueue(): Promise<void> {
    const now = new Date().toISOString();
    const pending = this.db
      .prepare(
        `SELECT * FROM sync_queue
         WHERE sync_status IN (0, 3)
           AND (next_retry_at IS NULL OR next_retry_at <= ?)
         ORDER BY created_at ASC
         LIMIT 10`,
      )
      .all(now) as SyncQueueRow[];

    for (const entry of pending) {
      await this.syncEntry(entry);
    }
  }

  private async syncEntry(entry: SyncQueueRow): Promise<void> {
    this.db
      .prepare(`UPDATE sync_queue SET sync_status = ? WHERE id = ?`)
      .run(1, entry.id); // Syncing

    try {
      const response = await fetch(`${this.middlewareBaseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: entry.payload,
        signal: AbortSignal.timeout(30_000),
      });

      if (response.ok) {
        this.db
          .prepare(`UPDATE sync_queue SET sync_status = 2, synced_at = ? WHERE id = ?`)
          .run(new Date().toISOString(), entry.id); // Done
        const parsed = JSON.parse(entry.payload) as { posOrderId: string };
        this.db
          .prepare(`UPDATE orders SET sync_status = 2, synced_at = ? WHERE pos_order_id = ?`)
          .run(new Date().toISOString(), parsed.posOrderId);
      } else {
        const retryCount = entry.retry_count + 1;
        const delay = getBackoffDelay(retryCount);
        const nextRetry = new Date(Date.now() + delay).toISOString();
        this.db
          .prepare(
            `UPDATE sync_queue SET sync_status = 3, retry_count = ?, next_retry_at = ?, error_message = ? WHERE id = ?`,
          )
          .run(retryCount, nextRetry, `HTTP ${response.status}`, entry.id);
      }
    } catch (err) {
      const retryCount = entry.retry_count + 1;
      const delay = getBackoffDelay(retryCount);
      const nextRetry = new Date(Date.now() + delay).toISOString();
      this.db
        .prepare(
          `UPDATE sync_queue SET sync_status = 3, retry_count = ?, next_retry_at = ?, error_message = ? WHERE id = ?`,
        )
        .run(retryCount, nextRetry, String((err as Error).message), entry.id);
    }
  }
}
