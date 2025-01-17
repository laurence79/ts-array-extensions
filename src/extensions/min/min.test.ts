import { min } from './min.js';

test('returns the lowest number', () => {
  const result = min([1, 10, 100]);

  expect(result).toEqual(1);
});

test('returns the lowest projection', () => {
  const result = min([1, 10, 100], v => v * 2);

  expect(result).toEqual(2);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].min).toBeDefined();
});
