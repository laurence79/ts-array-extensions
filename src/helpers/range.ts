/* eslint-disable import/prefer-default-export */
export const range = (from: number, to: number, step = 1): number[] => {
  const size = Math.floor(Math.abs((to - from) / Math.abs(step))) + 1;
  const direction = to >= from ? step : -step;
  return [...Array(size).keys()].map(v => from + v * direction);
};
