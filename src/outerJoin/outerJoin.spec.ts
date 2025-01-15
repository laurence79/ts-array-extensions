import './outerJoin.js';

describe('outerJoin', () => {
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

  it('returns the expected number of results', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l.groupId === r.id);
    expect(result.length).toEqual(5);
  });

  it('returns unmatched left values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l.groupId === r.id);
    expect(result).toContainEqual({
      left: { id: 4, name: 'Random', groupId: null },
      right: null
    });
  });

  it('returns unmatched right values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l.groupId === r.id);
    expect(result).toContainEqual({
      left: null,
      right: { id: 3, name: 'Confectionary' }
    });
  });

  it('returns matched values', () => {
    const result = leftData.outerJoin(rightData, (l, r) => l.groupId === r.id);
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
});
