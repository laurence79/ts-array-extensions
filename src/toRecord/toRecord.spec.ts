import '.';

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

  it('last value for key wins', () => {
    const result = sampleData.toRecord(v => v.colour);

    expect(result['RED'].id).toEqual(4);
    expect(result['BLUE'].id).toEqual(3);
  });

  it('projects key value pairs', () => {
    const result = sampleData.toRecord(v => ({ key: v.colour, value: v.id }));

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
    expect(result['RED']).toEqual(4);
    expect(result['BLUE']).toEqual(3);
  });

  it('projects keys and values', () => {
    const result = sampleData.toRecord(
      v => v.colour,
      v => v.id
    );

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
    expect(result['RED']).toEqual(4);
    expect(result['BLUE']).toEqual(3);
  });
});
