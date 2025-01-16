import { interleave } from './interleave.js';

test('inserts elements', () => {
  const result = interleave(['one', 'two', 'three'], () => 'and');

  expect(result).toEqual(['one', 'and', 'two', 'and', 'three']);
});

test('calls the callback with the expected values', () => {
  const calls: { p: string; n: string }[] = [];

  interleave(['one', 'two', 'three'], (p, n) => {
    calls.push({ p, n });
    return 'and';
  });

  expect(calls.length).toEqual(2);
  expect(calls[0].p).toEqual('one');
  expect(calls[0].n).toEqual('two');
  expect(calls[1].p).toEqual('two');
  expect(calls[1].n).toEqual('three');
});

import './addToPrototype.js';

test('applied to array prototype', () => {
  expect([].interleave).toBeDefined();
});
