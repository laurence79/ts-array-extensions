import '.';

describe('outerJoin', () => {
  const leftData = [1, 2, 3, 4];
  const rightData = [3, 4, 5, 6];

  it('returns the expected number of results', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l === r);
    expect(result.length).toEqual(6);
  });

  it('returns unmatched left values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l === r);
    expect(result).toContainEqual({ left: 1, right: null });
    expect(result).toContainEqual({ left: 2, right: null });
  });

  it('returns unmatched right values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l === r);
    expect(result).toContainEqual({ left: null, right: 5 });
    expect(result).toContainEqual({ left: null, right: 6 });
  });

  it('returns matched values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l === r);
    expect(result).toContainEqual({ left: 3, right: 3 });
    expect(result).toContainEqual({ left: 4, right: 4 });
  });
});
