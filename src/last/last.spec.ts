import './last.js';

describe('last', () => {
  it('returns the last element of the array', () => {
    const result = [1, 2].last();
    expect(result).toEqual(2);
  });
  it('returns undefined for empty arrays', () => {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    const result = [].last();
    expect(result).toBeUndefined();
  });
  it('uses projection', () => {
    const result = ['egg', 'bacon', 'beans'].last(e => e.startsWith('b'));
    expect(result).toEqual('beans');
  });
});
