import { groupBy } from './groupBy.js';

const sampleData = [
  {
    id: 1,
    colour: 'PINK'
  },
  {
    id: 2,
    colour: 'PURPLE'
  },
  {
    id: 3,
    colour: 'PURPLE'
  },
  {
    id: 4,
    colour: 'PINK'
  }
];

test('extracts group keys', () => {
  const result = groupBy(sampleData, v => v.colour);

  expect(result.map(r => r.key)).toEqual(['PINK', 'PURPLE']);
});

test('returns group values', () => {
  const result = groupBy(sampleData, v => v.colour);

  expect(result).toContainEqual({
    key: 'PINK',
    values: [
      {
        id: 1,
        colour: 'PINK'
      },
      {
        id: 4,
        colour: 'PINK'
      }
    ]
  });
  expect(result).toContainEqual({
    key: 'PURPLE',
    values: [
      {
        id: 2,
        colour: 'PURPLE'
      },
      {
        id: 3,
        colour: 'PURPLE'
      }
    ]
  });
});

test('uses custom comparer', () => {
  const result = groupBy(
    sampleData,
    v => ({ initial: v.colour[0], remain: v.colour.substring(1) }),
    (a, b) => a.initial === b.initial && a.remain === b.remain
  );

  expect(result).toContainEqual({
    key: { initial: 'P', remain: 'INK' },
    values: [
      {
        id: 1,
        colour: 'PINK'
      },
      {
        id: 4,
        colour: 'PINK'
      }
    ]
  });
});

import './addPrototype.js';

test('applied to array prototype', () => {
  expect([].groupBy).toBeDefined();
});
