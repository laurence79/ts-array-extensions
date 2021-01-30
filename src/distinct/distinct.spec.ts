import '.';

describe('distinct', () => {
  it('does not return duplicate numbers', () => {
    const result = [1, 2, 2, 3].distinct();
    expect(result).toEqual([1, 2, 3]);
  });
  it('does not return duplicate strings', () => {
    const result = ['one', 'two', 'two', 'three'].distinct();
    expect(result).toEqual(['one', 'two', 'three']);
  });
});
