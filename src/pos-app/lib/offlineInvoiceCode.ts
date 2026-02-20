/**
 * Offline invoice code generator.
 * Generates temporary invoice codes using registered identifier ranges.
 */

/**
 * Generate a deterministic offline invoice code.
 * Format: {prefix}-{YYYYMMDD}-{sequence:06d}
 * @param prefix - POS identifier prefix registered with tax authority
 */
export function generate(prefix: string, date: Date, sequence: number): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const seq = String(sequence).padStart(6, '0');
  return `${prefix}-${year}${month}${day}-${seq}`;
}

/**
 * Generate a globally unique temporary ID for offline use.
 * Format: {posIdentifier}-{timestamp}-{random4digits}
 */
export function generateUniqueId(posIdentifier: string): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `${posIdentifier}-${timestamp}-${random}`;
}
