import { leftJoin } from './leftJoin.js';

const leftData = [
  { id: 1, name: 'Apples', groupId: 1 },
  { id: 2, name: 'Oranges', groupId: 1 },
  { id: 3, name: 'Cornflakes', groupId: 2 },
  { id: 4, name: 'Random', groupId: null }
];
const rightData = [
  { id: 1, name: 'Produce' },
  { id: 2, name: 'Grocery' },
  { id: 3, name: 'Confectionary' }
];

test('returns the expected number of results', () => {
  const result = leftJoin(leftData, rightData, (l, r) => l.groupId === r.id);
  expect(result.length).toEqual(4);
});

test('returns unmatched left values', () => {
  const result = leftJoin(leftData, rightData, (l, r) => l.groupId === r.id);
  expect(result).toContainEqual({
    left: { id: 4, name: 'Random', groupId: null },
    right: null
  });
});

test('returns matched values', () => {
  const result = leftJoin(leftData, rightData, (l, r) => l.groupId === r.id);
  expect(result).toContainEqual({
    left: { id: 1, name: 'Apples', groupId: 1 },
    right: { id: 1, name: 'Produce' }
  });
  expect(result).toContainEqual({
    left: { id: 2, name: 'Oranges', groupId: 1 },
    right: { id: 1, name: 'Produce' }
  });
  expect(result).toContainEqual({
    left: { id: 3, name: 'Cornflakes', groupId: 2 },
    right: { id: 2, name: 'Grocery' }
  });
});

test('uses the ordering from the left', () => {
  const left = ['1', '2', '3'];
  const right = ['1'];

  const result = leftJoin(left, right, (l, r) => l === r);

  expect(result).toStrictEqual([
    { left: '1', right: '1' },
    { left: '2', right: null },
    { left: '3', right: null }
  ]);
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].leftJoin).toBeDefined();
});
