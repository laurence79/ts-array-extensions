import { none } from './none.js';

test('returns false for arrays that have elements', () => {
  expect(none(['some', 'elements'])).toEqual(false);
});

test('returns true for arrays with no elements', () => {
  expect(none([])).toEqual(true);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].none).toBeDefined();
});
