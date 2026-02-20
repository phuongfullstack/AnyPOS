const { getBackoffDelay } = require('../lib/syncWorker');

describe('getBackoffDelay', () => {
  test('retry 0: 5000ms', () => expect(getBackoffDelay(0)).toBe(5000));
  test('retry 1: 10000ms', () => expect(getBackoffDelay(1)).toBe(10000));
  test('retry 2: 20000ms', () => expect(getBackoffDelay(2)).toBe(20000));
  test('retry 3: 40000ms', () => expect(getBackoffDelay(3)).toBe(40000));
  test('retry 10: capped at 3600000ms (1 hour)', () => expect(getBackoffDelay(10)).toBe(3600000));
});
