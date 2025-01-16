import { cume } from './cume.js';

test('sums numbers', () => {
  const result = cume([1, 10, 100]);
  expect(result).toEqual([1, 11, 111]);
});

test('returns empty array by default', () => {
  const result = cume([]);
  expect(result).toEqual([]);
});

test('skips non-number values', () => {
  const result = cume([1, 'red', { id: 6 }]);
  expect(result).toEqual([1, 1, 1]);
});

test('maps numbers first', () => {
  const result = cume([1, 10, 100], x => x * 10);
  expect(result).toEqual([10, 110, 1110]);
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].cume).toBeDefined();
});
