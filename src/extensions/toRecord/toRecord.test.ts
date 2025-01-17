import { toRecord } from './toRecord.js';

const sampleData = [
  {
    id: 1,
    colour: 'RED'
  },
  {
    id: 2,
    colour: 'BLUE'
  },
  {
    id: 3,
    colour: 'BLUE'
  },
  {
    id: 4,
    colour: 'RED'
  }
];

test('extracts keys', () => {
  const result = toRecord(sampleData, v => v.colour);

  expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
});

test('extracts last value', () => {
  const result = toRecord(sampleData, v => v.colour);

  expect(result.RED).toEqual({
    id: 4,
    colour: 'RED'
  });

  expect(result.BLUE).toEqual({
    id: 3,
    colour: 'BLUE'
  });
});

import './apply.js';

test('applied to array prototype', () => {
  expect([].toRecord).toBeDefined();
});
