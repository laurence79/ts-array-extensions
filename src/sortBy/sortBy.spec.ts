import './sortBy.js';

const input = [
  { name: 'Brian', age: 1 },
  { name: 'Albert', age: 10 },
  { name: 'Charlie', age: 5 }
];

describe('sortBy', () => {
  it('sorts string fields', () => {
    const result = input.sortBy(v => v.name);

    expect(result.map(v => v.name)).toEqual(['Albert', 'Brian', 'Charlie']);
  });

  it('descending works', () => {
    const result = input.sortBy(v => v.name, 'desc');

    expect(result.map(v => v.name)).toEqual(['Charlie', 'Brian', 'Albert']);
  });

  it('sorts using numeric fields', () => {
    const result = input.sortBy(v => v.age);

    expect(result.map(v => v.name)).toEqual(['Brian', 'Charlie', 'Albert']);
  });

  it('does not mutate original array', () => {
    const result = input.sortBy(v => v.age, 'desc');

    expect(result.map(v => v.name)).toEqual(['Albert', 'Charlie', 'Brian']);
    expect(input.map(v => v.name)).toEqual(['Brian', 'Albert', 'Charlie']);
  });
});
