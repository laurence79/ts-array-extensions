import './compactMap.js';

describe('compactMap', () => {
  it('uses projection', () => {
    const result = [1, undefined, 2].compactMap(e => (e ? e * 2 : e));
    expect(result).toEqual([2, 4]);
  });
});
