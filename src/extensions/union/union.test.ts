import { union } from './union.js';

test('returns only values present in both arrays', () => {
  const first = [1, 2, 3];
  const second = [2, 3, 4];

  const result = union(first, second);

  expect(result).toEqual([2, 3]);
});

test('does not return duplicates', () => {
  const first = [1, 2, 2, 2];
  const second = [2, 3];

  const result = union(first, second);

  expect(result).toEqual([2]);
});

test('uses custom comparer', () => {
  const first = [
    { day: 1, month: 1, year: 1979 },
    { day: 2, month: 1, year: 1979 }
  ];

  const second = [
    { day: 2, month: 1, year: 1979 },
    { day: 3, month: 1, year: 1979 }
  ];

  const result = union(
    first,
    second,
    (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
  );

  expect(result.length).toEqual(1);

  expect(result).toContainEqual({ day: 2, month: 1, year: 1979 });
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].union).toBeDefined();
});
