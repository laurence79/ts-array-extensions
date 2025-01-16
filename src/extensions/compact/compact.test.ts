import { compact } from './compact.js';

test('does not return nulls', () => {
  const result = compact([1, null, 2]);
  expect(result).toEqual([1, 2]);
});

test('does not return undefined', () => {
  const result = compact([1, undefined, 2]);
  expect(result).toEqual([1, 2]);
});

test('returns falsy values', () => {
  const result = compact([true, false]);
  expect(result).toEqual([true, false]);
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].compact).toBeDefined();
});
