import { except } from './except.js';

test("returns only values in the first array that aren't in the second", () => {
  const first = [1, 2, 3];
  const second = [2, 3, 4];

  const result = except(first, second);

  expect(result).toEqual([1]);
});

test('does not return duplicates', () => {
  const first = [1, 1, 2, 2, 2];
  const second = [2, 3];

  const result = except(first, second);

  expect(result).toEqual([1]);
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

  const result = except(
    first,
    second,
    (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
  );

  expect(result.length).toEqual(1);

  expect(result).toContainEqual({ day: 1, month: 1, year: 1979 });
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].except).toBeDefined();
});
