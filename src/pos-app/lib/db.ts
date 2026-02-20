import Database from 'better-sqlite3';
import path from 'path';
import os from 'os';
import { mkdirSync } from 'fs';

const DB_PATH = path.join(os.homedir(), '.anypos', 'anypos.db');

let db: InstanceType<typeof Database> | undefined;

export function getDb(): InstanceType<typeof Database> {
  if (!db) {
    mkdirSync(path.dirname(DB_PATH), { recursive: true });
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initSchema(db);
  }
  return db;
}

function initSchema(database: InstanceType<typeof Database>): void {
  database.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pos_order_id TEXT NOT NULL UNIQUE,
      wc_order_id TEXT,
      invoice_no TEXT,
      sync_status INTEGER NOT NULL DEFAULT 0,
      tax_code TEXT,
      sub_total REAL NOT NULL DEFAULT 0,
      tax_amount REAL NOT NULL DEFAULT 0,
      total REAL NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      synced_at TEXT
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL REFERENCES orders(id),
      product_id TEXT NOT NULL,
      wc_product_id TEXT,
      name TEXT NOT NULL,
      quantity INTEGER NOT NULL,
      unit_price REAL NOT NULL,
      tax_rate REAL NOT NULL DEFAULT 10,
      line_total REAL NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      local_id TEXT NOT NULL UNIQUE,
      wc_product_id TEXT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      tax_rate REAL NOT NULL DEFAULT 10,
      stock INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS sync_queue (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pos_order_id TEXT NOT NULL,
      wc_order_id TEXT,
      invoice_no TEXT,
      sync_status INTEGER NOT NULL DEFAULT 0,
      tax_code TEXT,
      payload TEXT NOT NULL,
      retry_count INTEGER NOT NULL DEFAULT 0,
      next_retry_at TEXT,
      error_message TEXT,
      synced_at TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}
