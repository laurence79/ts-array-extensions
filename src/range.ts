/* eslint-disable import/prefer-default-export */
export const range = (from: number, to: number): number[] => {
  const size = Math.abs(to - from) + 1;
  const direction = to >= from ? 1 : -1;
  return [...Array(size).keys()].map(v => from + v * direction);
};
