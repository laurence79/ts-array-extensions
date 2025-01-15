import './toRecord.js';

describe('toRecord', () => {
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

  it('extracts keys', () => {
    const result = sampleData.toRecord(v => v.colour);

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
  });

  it('extracts last value', () => {
    const result = sampleData.toRecord(v => v.colour);

    expect(result.RED).toEqual({
      id: 4,
      colour: 'RED'
    });

    expect(result.BLUE).toEqual({
      id: 3,
      colour: 'BLUE'
    });
  });
});
