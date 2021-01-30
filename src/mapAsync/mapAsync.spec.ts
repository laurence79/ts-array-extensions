import '.';

describe('mapAsync', () => {
  it('awaits promises', async () => {
    const result = await [1, 2].mapAsync(v => Promise.resolve(v * 2));
    expect(result).toEqual([2, 4]);
  });
});
