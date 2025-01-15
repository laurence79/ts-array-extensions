import './groupBy.js';

describe('groupBy', () => {
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

  it('extracts group keys', () => {
    const result = sampleData.groupBy(v => v.colour);

    expect(result.map(r => r.key)).toEqual(['PINK', 'PURPLE']);
  });

  it('returns group values', () => {
    const result = sampleData.groupBy(v => v.colour);

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

  it('uses custom comparer', () => {
    const result = sampleData.groupBy(
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
});
