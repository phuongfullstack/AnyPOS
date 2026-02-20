const { calculateTax, calculateLineTotal, calculateOrderTotals, roundHalfAwayFromZero } = require('../lib/taxCalculation');

describe('roundHalfAwayFromZero', () => {
  test('rounds 0.5 up', () => expect(roundHalfAwayFromZero(0.5)).toBe(1));
  test('rounds 1.5 up', () => expect(roundHalfAwayFromZero(1.5)).toBe(2));
  test('rounds 2.4 down', () => expect(roundHalfAwayFromZero(2.4)).toBe(2));
  test('negative 0.5 rounds to -1', () => expect(roundHalfAwayFromZero(-0.5)).toBe(-1));
});

describe('calculateTax', () => {
  test('100000 at 10% = 10000', () => expect(calculateTax(100000, 10)).toBe(10000));
  test('100001 at 10% = 10000 (rounds down)', () => expect(calculateTax(100001, 10)).toBe(10000));
  test('100005 at 10% = 10001 (rounds up on .5)', () => expect(calculateTax(100005, 10)).toBe(10001));
  test('50000 at 8% = 4000', () => expect(calculateTax(50000, 8)).toBe(4000));
  test('33333 at 10% = 3333 (rounds down)', () => expect(calculateTax(33333, 10)).toBe(3333));
  test('0 at 10% = 0', () => expect(calculateTax(0, 10)).toBe(0));
});

describe('calculateLineTotal', () => {
  test('50000 * 2 at 10% = 110000', () => expect(calculateLineTotal(50000, 2, 10)).toBe(110000));
  test('25000 * 3 at 8% = 81000', () => expect(calculateLineTotal(25000, 3, 8)).toBe(81000));
});

describe('calculateOrderTotals', () => {
  test('multiple items', () => {
    const items = [
      { unitPrice: 100000, quantity: 2, taxRate: 10 },
      { unitPrice: 50000, quantity: 1, taxRate: 8 },
    ];
    const { subTotal, taxAmount, total } = calculateOrderTotals(items);
    expect(subTotal).toBe(250000);
    expect(taxAmount).toBe(24000);
    expect(total).toBe(274000);
  });
  test('empty items', () => {
    const { subTotal, taxAmount, total } = calculateOrderTotals([]);
    expect(subTotal).toBe(0);
    expect(taxAmount).toBe(0);
    expect(total).toBe(0);
  });
});
