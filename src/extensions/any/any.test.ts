import { any } from './any.js';

test('returns true for arrays that have elements', () => {
  expect(any(['some', 'elements'])).toEqual(true);
});

test('returns false for arrays with no elements', () => {
  expect(any([])).toEqual(false);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].any).toBeDefined();
});
