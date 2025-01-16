import './interleave.js';

describe('interleave', () => {
  it('inserts elements', () => {
    const result = ['one', 'two', 'three'].interleave(() => 'and');

    expect(result).toEqual(['one', 'and', 'two', 'and', 'three']);
  });

  it('calls the callback with the expected values', () => {
    const calls: { p: string; n: string }[] = [];

    ['one', 'two', 'three'].interleave((p, n) => {
      calls.push({ p, n });
      return 'and';
    });

    expect(calls.length).toEqual(2);
    expect(calls[0].p).toEqual('one');
    expect(calls[0].n).toEqual('two');
    expect(calls[1].p).toEqual('two');
    expect(calls[1].n).toEqual('three');
  });
});
