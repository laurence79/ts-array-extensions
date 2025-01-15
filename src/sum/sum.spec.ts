import './sum.js';

describe('sum', () => {
  it('sums numbers', () => {
    const result = [1, 10, 100].sum();
    expect(result).toEqual(111);
  });

  it('returns zero by default', () => {
    const result = [].sum();
    expect(result).toEqual(0);
  });

  it('skips non-number values', () => {
    const result = [1, 'red', { id: 6 }].sum();
    expect(result).toEqual(1);
  });
});
