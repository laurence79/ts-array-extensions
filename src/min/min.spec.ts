import './min.js';

describe('min', () => {
  it('returns the lowest number', () => {
    const result = [1, 10, 100].min();

    expect(result).toEqual(1);
  });
  it('returns the lowest projection', () => {
    const result = [1, 10, 100].min(v => v * 2);

    expect(result).toEqual(2);
  });
});
