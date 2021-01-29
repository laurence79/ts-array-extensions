import '.';

describe('any', () => {
  it('returns true for arrays that have elements', () => {
    expect(['some', 'elements'].any()).toEqual(true);
  });
  it('returns false for arrays with no elements', () => {
    expect([].any()).toEqual(false);
  });
});
