/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import './compactMapAsync.js';

describe('compactMapAsync', () => {
  it('awaits promises', async () => {
    const result = await [1, 2].compactMapAsync(v => Promise.resolve(v * 2));
    expect(result).toEqual([2, 4]);
  });
  it('does not return nulls', async () => {
    const result = await [1, null, 2].compactMapAsync(
      v => new Promise<number | null>(r => (v ? r(v * 2) : r(v)))
    );
    expect(result).toEqual([2, 4]);
  });
  it('does not return undefined', async () => {
    const result = await [1, undefined, 2].compactMapAsync(
      v => new Promise<number | undefined>(r => (v ? r(v * 2) : r(v)))
    );
    expect(result).toEqual([2, 4]);
  });
});
