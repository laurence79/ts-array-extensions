import { max } from './max.js';

test('returns the highest number', () => {
  const result = max([1, 10, 100]);

  expect(result).toEqual(100);
});

test('returns the highest projection', () => {
  const result = max([1, 10, 100], v => v * 2);

  expect(result).toEqual(200);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].max).toBeDefined();
});
