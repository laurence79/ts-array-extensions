import { last } from './last.js';

test('returns the last element of the array', () => {
  const result = last([1, 2]);
  expect(result).toEqual(2);
});

test('returns undefined for empty arrays', () => {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const result = last([]);
  expect(result).toBeUndefined();
});

test('uses projection', () => {
  const result = last(['egg', 'bacon', 'beans'], e => e.startsWith('b'));
  expect(result).toEqual('beans');
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].last).toBeDefined();
});
