import '.';

describe('none', () => {
  it('returns false for arrays that have elements', () => {
    expect(['some', 'elements'].none()).toEqual(false);
  });
  it('returns true for arrays with no elements', () => {
    expect([].none()).toEqual(true);
  });
});
