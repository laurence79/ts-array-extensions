import '.';

describe('groupBy', () => {
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

  it('extracts group keys', () => {
    const result = sampleData.groupBy(v => v.colour);

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
  });

  it('returns group values', () => {
    const result = sampleData.groupBy(v => v.colour);

    expect(result['RED'][0].id).toEqual(1);
    expect(result['RED'][1].id).toEqual(4);
    expect(result['BLUE'][0].id).toEqual(2);
    expect(result['BLUE'][1].id).toEqual(3);
  });

  it('projects key value pairs', () => {
    const result = sampleData.groupBy(v => ({ key: v.colour, value: v.id }));

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
    expect(result['RED']).toEqual([1, 4]);
    expect(result['BLUE']).toEqual([2, 3]);
  });

  it('projects keys and values', () => {
    const result = sampleData.groupBy(
      v => v.colour,
      v => v.id
    );

    expect(Object.keys(result)).toEqual(['RED', 'BLUE']);
    expect(result['RED']).toEqual([1, 4]);
    expect(result['BLUE']).toEqual([2, 3]);
  });
});
