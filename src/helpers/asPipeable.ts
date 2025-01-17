export const asPipeable = <const A extends readonly unknown[], B, T>(
  fn: (arr: readonly T[], ...args: A) => B
) => {
  return (...args: A) =>
    (arr: readonly T[]): B => {
      return fn(arr, ...args);
    };
};
