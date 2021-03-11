import '..';

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

  it('extracts values', () => {
    const result = sampleData.toRecord(v => v.colour);

    expect(result.RED.length).toEqual(2);
    expect(result.RED).toContainEqual({
      id: 1,
      colour: 'RED'
    });
    expect(result.RED).toContainEqual({
      id: 4,
      colour: 'RED'
    });

    expect(result.BLUE.length).toEqual(2);
    expect(result.BLUE).toContainEqual({
      id: 2,
      colour: 'BLUE'
    });
    expect(result.BLUE).toContainEqual({
      id: 3,
      colour: 'BLUE'
    });
  });

  it('aggregates values', () => {
    const result = sampleData.toRecord(
      v => v.colour,
      v => ({
        count: v.length,
        min: v.min(u => u.id),
        max: v.max(u => u.id)
      })
    );

    expect(result.RED).toEqual({
      count: 2,
      min: 1,
      max: 4
    });
    expect(result.BLUE).toEqual({
      count: 2,
      min: 2,
      max: 3
    });
  });
});
