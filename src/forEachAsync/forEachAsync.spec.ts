import './forEachAsync.js';

describe('forEachAsync', () => {
  it('awaits all promises', async () => {
    const answers: number[] = [];
    await [1, 2].forEachAsync(
      v =>
        new Promise(r => {
          answers.push(v * 2);
          r();
        })
    );
    expect(answers).toEqual([2, 4]);
  });
});
