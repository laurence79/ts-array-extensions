import './distinct.js';

describe('distinct', () => {
  it('does not return duplicate numbers', () => {
    const result = [1, 2, 2, 3].distinct();
    expect(result).toEqual([1, 2, 3]);
  });

  it('does not return duplicate strings', () => {
    const result = ['one', 'two', 'two', 'three'].distinct();
    expect(result).toEqual(['one', 'two', 'three']);
  });

  it('uses custom comparer', () => {
    const result = [
      { day: 1, month: 1, year: 1979 },
      { day: 1, month: 1, year: 1979 },
      { day: 2, month: 1, year: 1979 },
      { day: 3, month: 1, year: 1979 }
    ].distinct(
      (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
    );

    expect(result.length).toEqual(3);

    expect(result).toContainEqual({ day: 1, month: 1, year: 1979 });
    expect(result).toContainEqual({ day: 2, month: 1, year: 1979 });
    expect(result).toContainEqual({ day: 3, month: 1, year: 1979 });
  });
});
