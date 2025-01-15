import './cume.js';

describe('cume', () => {
  it('sums numbers', () => {
    const result = [1, 10, 100].cume();
    expect(result).toEqual([1, 11, 111]);
  });

  it('returns empty array by default', () => {
    const result = [].cume();
    expect(result).toEqual([]);
  });

  it('skips non-number values', () => {
    const result = [1, 'red', { id: 6 }].cume();
    expect(result).toEqual([1, 1, 1]);
  });

  it('maps numbers first', () => {
    const result = [1, 10, 100].cume(x => x * 10);
    expect(result).toEqual([10, 110, 1110]);
  });
});
