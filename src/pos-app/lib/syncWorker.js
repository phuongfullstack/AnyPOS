/**
 * Background sync worker - polls sync queue and pushes to middleware.
 * Uses exponential backoff for retries.
 */

const SYNC_INTERVAL_MS = 10000; // 10 seconds
const BASE_DELAY_MS = 5000;     // 5 seconds base backoff
const MAX_RETRY_DELAY_MS = 3600000; // 1 hour max

/**
 * Calculate exponential backoff delay.
 * @param {number} retryCount
 * @returns {number} delay in milliseconds
 */
function getBackoffDelay(retryCount) {
  const delay = Math.pow(2, retryCount) * BASE_DELAY_MS;
  return Math.min(delay, MAX_RETRY_DELAY_MS);
}

/**
 * SyncWorker manages background synchronization of the local queue to middleware.
 */
class SyncWorker {
  constructor(db, middlewareBaseUrl) {
    this.db = db;
    this.middlewareBaseUrl = middlewareBaseUrl;
    this.running = false;
    this.timer = null;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.scheduleNext();
  }

  stop() {
    this.running = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  scheduleNext() {
    if (!this.running) return;
    this.timer = setTimeout(async () => {
      await this.processSyncQueue();
      this.scheduleNext();
    }, SYNC_INTERVAL_MS);
  }

  async processSyncQueue() {
    const now = new Date().toISOString();
    const pending = this.db.prepare(`
      SELECT * FROM sync_queue
      WHERE sync_status IN (0, 3)
        AND (next_retry_at IS NULL OR next_retry_at <= ?)
      ORDER BY created_at ASC
      LIMIT 10
    `).all(now);

    for (const entry of pending) {
      await this.syncEntry(entry);
    }
  }

  async syncEntry(entry) {
    const updateStatus = this.db.prepare(
      `UPDATE sync_queue SET sync_status = ? WHERE id = ?`
    );
    updateStatus.run(1, entry.id); // Syncing

    try {
      const response = await fetch(`${this.middlewareBaseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: entry.payload,
        signal: AbortSignal.timeout(30000),
      });

      if (response.ok) {
        this.db.prepare(
          `UPDATE sync_queue SET sync_status = 2, synced_at = ? WHERE id = ?`
        ).run(new Date().toISOString(), entry.id); // Done
        // Also update order sync_status
        const parsed = JSON.parse(entry.payload);
        this.db.prepare(
          `UPDATE orders SET sync_status = 2, synced_at = ? WHERE pos_order_id = ?`
        ).run(new Date().toISOString(), parsed.posOrderId);
      } else {
        const retryCount = entry.retry_count + 1;
        const delay = getBackoffDelay(retryCount);
        const nextRetry = new Date(Date.now() + delay).toISOString();
        this.db.prepare(
          `UPDATE sync_queue SET sync_status = 3, retry_count = ?, next_retry_at = ?, error_message = ? WHERE id = ?`
        ).run(retryCount, nextRetry, `HTTP ${response.status}`, entry.id);
      }
    } catch (err) {
      const retryCount = entry.retry_count + 1;
      const delay = getBackoffDelay(retryCount);
      const nextRetry = new Date(Date.now() + delay).toISOString();
      this.db.prepare(
        `UPDATE sync_queue SET sync_status = 3, retry_count = ?, next_retry_at = ?, error_message = ? WHERE id = ?`
      ).run(retryCount, nextRetry, String(err.message), entry.id);
    }
  }
}

module.exports = { SyncWorker, getBackoffDelay };
