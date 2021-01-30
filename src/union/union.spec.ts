import '.';

describe('union', () => {
  it('returns only values present in both arrays', () => {
    const first = [1, 2, 3];
    const second = [2, 3, 4];

    const result = first.union(second);

    expect(result).toEqual([2, 3]);
  });
});
