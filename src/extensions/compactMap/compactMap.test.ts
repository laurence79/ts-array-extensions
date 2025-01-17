import { compactMap } from './compactMap.js';

test('uses projection', () => {
  const result = compactMap([1, undefined, 2], e => (e ? e * 2 : e));
  expect(result).toEqual([2, 4]);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].compactMap).toBeDefined();
});
