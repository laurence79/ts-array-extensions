import '.';

describe('compactMap', () => {
  it('does not return nulls', () => {
    const result = [1, null, 2].compactMap();
    expect(result).toEqual([1, 2]);
  });
  it('does not return undefined', () => {
    const result = [1, undefined, 2].compactMap();
    expect(result).toEqual([1, 2]);
  });
  it('uses projection', () => {
    const result = [1, undefined, 2].compactMap(e => (e ? e * 2 : e));
    expect(result).toEqual([2, 4]);
  });
  it('returns falsy values', () => {
    const result = [true, false].compactMap();
    expect(result).toEqual([true, false]);
  });
});
