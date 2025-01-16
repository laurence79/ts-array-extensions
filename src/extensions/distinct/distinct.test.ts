import { distinct } from './distinct.js';

test('does not return duplicate numbers', () => {
  const result = distinct([1, 2, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
});

test('does not return duplicate strings', () => {
  const result = distinct(['one', 'two', 'two', 'three']);
  expect(result).toEqual(['one', 'two', 'three']);
});

test('uses custom comparer', () => {
  const result = distinct(
    [
      { day: 1, month: 1, year: 1979 },
      { day: 1, month: 1, year: 1979 },
      { day: 2, month: 1, year: 1979 },
      { day: 3, month: 1, year: 1979 }
    ],
    (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
  );

  expect(result.length).toEqual(3);

  expect(result).toContainEqual({ day: 1, month: 1, year: 1979 });
  expect(result).toContainEqual({ day: 2, month: 1, year: 1979 });
  expect(result).toContainEqual({ day: 3, month: 1, year: 1979 });
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].distinct).toBeDefined();
});
