import { range } from './range.js';

describe('range', () => {
  it('works forwards', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('works backwards', () => {
    expect(range(5, 1)).toEqual([5, 4, 3, 2, 1]);
  });

  it('works with steps', () => {
    expect(range(1, 5, 2)).toEqual([1, 3, 5]);
  });

  it(`works with steps that don't fit perfectly`, () => {
    expect(range(1, 4, 2)).toEqual([1, 3]);
  });
});
