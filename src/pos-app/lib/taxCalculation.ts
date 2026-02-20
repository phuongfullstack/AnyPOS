/**
 * Tax calculation utilities following Vietnamese accounting rounding standards.
 * Rounding: round half up (away from zero), to nearest integer (VND).
 */

export interface TaxableItem {
  unitPrice: number;
  quantity: number;
  taxRate: number;
}

export interface OrderTotals {
  subTotal: number;
  taxAmount: number;
  total: number;
}

/**
 * Round half away from zero (accounting standard).
 */
export function roundHalfAwayFromZero(value: number): number {
  return value >= 0 ? Math.floor(value + 0.5) : Math.ceil(value - 0.5);
}

function calculateTaxStrict(amount: number, taxRate: number): number {
  return roundHalfAwayFromZero((amount * taxRate) / 100);
}

/**
 * Calculate line total (subtotal + tax).
 */
export function calculateLineTotal(
  unitPrice: number,
  quantity: number,
  taxRate: number,
): number {
  const subTotal = unitPrice * quantity;
  return subTotal + calculateTaxStrict(subTotal, taxRate);
}

/**
 * Calculate order totals from items.
 */
export function calculateOrderTotals(items: TaxableItem[]): OrderTotals {
  let subTotal = 0;
  let taxAmount = 0;
  for (const item of items) {
    const itemSubTotal = item.unitPrice * item.quantity;
    subTotal += itemSubTotal;
    taxAmount += calculateTaxStrict(itemSubTotal, item.taxRate);
  }
  return { subTotal, taxAmount, total: subTotal + taxAmount };
}

export const calculateTax = calculateTaxStrict;
