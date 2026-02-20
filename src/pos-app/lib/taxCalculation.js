/**
 * Tax calculation utilities following Vietnamese accounting rounding standards.
 * Rounding: round half up (away from zero), to nearest integer (VND).
 */

/**
 * Round half away from zero (accounting standard).
 * @param {number} value
 */
function roundHalfAwayFromZero(value) {
  return value >= 0 ? Math.floor(value + 0.5) : Math.ceil(value - 0.5);
}

/**
 * Calculate tax with strict accounting rounding (round half away from zero).
 * @param {number} amount
 * @param {number} taxRate - percentage
 */
function calculateTaxStrict(amount, taxRate) {
  return roundHalfAwayFromZero(amount * taxRate / 100);
}

/**
 * Calculate line total (subtotal + tax).
 * @param {number} unitPrice
 * @param {number} quantity
 * @param {number} taxRate
 */
function calculateLineTotal(unitPrice, quantity, taxRate) {
  const subTotal = unitPrice * quantity;
  return subTotal + calculateTaxStrict(subTotal, taxRate);
}

/**
 * Calculate order totals from items.
 * @param {Array<{unitPrice: number, quantity: number, taxRate: number}>} items
 */
function calculateOrderTotals(items) {
  let subTotal = 0;
  let taxAmount = 0;
  for (const item of items) {
    const itemSubTotal = item.unitPrice * item.quantity;
    subTotal += itemSubTotal;
    taxAmount += calculateTaxStrict(itemSubTotal, item.taxRate);
  }
  return { subTotal, taxAmount, total: subTotal + taxAmount };
}

module.exports = { calculateTax: calculateTaxStrict, calculateLineTotal, calculateOrderTotals, roundHalfAwayFromZero };
