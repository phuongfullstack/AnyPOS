import { generate, generateUniqueId } from '../lib/offlineInvoiceCode';

describe('generate', () => {
  test('produces correct format', () => {
    expect(generate('POS', new Date(2024, 0, 15), 1)).toBe('POS-20240115-000001');
  });
  test('pads sequence to 6 digits', () => {
    expect(generate('POS', new Date(2024, 11, 31), 999999)).toBe('POS-20241231-999999');
  });
  test('different prefix', () => {
    expect(generate('STORE01', new Date(2024, 5, 1), 42)).toBe('STORE01-20240601-000042');
  });
});

describe('generateUniqueId', () => {
  test('starts with posIdentifier', () => {
    expect(generateUniqueId('STORE01')).toMatch(/^STORE01-/);
  });
  test('matches format posId-timestamp-random', () => {
    expect(generateUniqueId('POS')).toMatch(/^POS-\d+-\d+$/);
  });
});
