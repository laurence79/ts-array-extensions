import './compact.js';

describe('compact', () => {
  it('does not return nulls', () => {
    const result = [1, null, 2].compact();
    expect(result).toEqual([1, 2]);
  });
  it('does not return undefined', () => {
    const result = [1, undefined, 2].compact();
    expect(result).toEqual([1, 2]);
  });
  it('returns falsy values', () => {
    const result = [true, false].compact();
    expect(result).toEqual([true, false]);
  });
});
