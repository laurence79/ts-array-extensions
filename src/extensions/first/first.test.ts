import { first } from './first.js';

test('returns the first element of the array', () => {
  const result = first([1, 2]);
  expect(result).toEqual(1);
});

test('returns undefined for empty arrays', () => {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const result = first([]);
  expect(result).toBeUndefined();
});

test('uses projection', () => {
  const result = first(['egg', 'bacon', 'beans'], e => e.startsWith('b'));
  expect(result).toEqual('bacon');
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].first).toBeDefined();
});
