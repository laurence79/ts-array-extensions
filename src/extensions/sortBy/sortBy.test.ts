import { sortBy } from './sortBy.js';

const input = [
  { name: 'Brian', age: 1 },
  { name: 'Albert', age: 10 },
  { name: 'Charlie', age: 5 }
];

test('sorts string fields', () => {
  const result = sortBy(input, v => v.name);

  expect(result.map(v => v.name)).toEqual(['Albert', 'Brian', 'Charlie']);
});

test('descending works', () => {
  const result = sortBy(input, v => v.name, 'desc');

  expect(result.map(v => v.name)).toEqual(['Charlie', 'Brian', 'Albert']);
});

test('sorts using numeric fields', () => {
  const result = sortBy(input, v => v.age);

  expect(result.map(v => v.name)).toEqual(['Brian', 'Charlie', 'Albert']);
});

test('does not mutate original array', () => {
  const result = sortBy(input, v => v.age, 'desc');

  expect(result.map(v => v.name)).toEqual(['Albert', 'Charlie', 'Brian']);
  expect(input.map(v => v.name)).toEqual(['Brian', 'Albert', 'Charlie']);
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].sortBy).toBeDefined();
});
