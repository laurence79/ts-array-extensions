import './max.js';

describe('max', () => {
  it('returns the highest number', () => {
    const result = [1, 10, 100].max();

    expect(result).toEqual(100);
  });
  it('returns the highest projection', () => {
    const result = [1, 10, 100].max(v => v * 2);

    expect(result).toEqual(200);
  });
});
