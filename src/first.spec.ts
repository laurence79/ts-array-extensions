import '.';

describe('first', () => {
  it('returns the first element of the array', () => {
    const result = [1, 2].first();
    expect(result).toEqual(1);
  });
  it('returns undefined for empty arrays', () => {
    const result = [].first();
    expect(result).toBeUndefined();
  });
  it('uses projection', () => {
    const result = ['egg', 'bacon', 'beans'].first(e => e.startsWith('b'));
    expect(result).toEqual('bacon');
  });
});
