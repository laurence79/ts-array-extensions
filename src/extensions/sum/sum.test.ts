import { sum } from './sum.js';

test('sums numbers', () => {
  const result = sum([1, 10, 100]);
  expect(result).toEqual(111);
});

test('returns zero by default', () => {
  const result = sum([]);
  expect(result).toEqual(0);
});

test('skips non-number values', () => {
  const result = sum([1, 'red', { id: 6 }]);
  expect(result).toEqual(1);
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].sum).toBeDefined();
});
