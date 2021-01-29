/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    max(): T | null;
    max<V extends string | number>(
      callback: (element: T, index: number, array: T[]) => V
    ): V | null;
  }
}

if (!Array.prototype.max) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.max = function max<T, V>(
    this: T[],
    callback?: (element: T, index: number, array: T[]) => V
  ): V | null {
    let maxValue: T | V | null = null;
    this.forEach((element, index) => {
      const t = callback?.(element, index, this) ?? element;
      if (maxValue === null || maxValue < t) {
        maxValue = t;
      }
    });
    return maxValue;
  };
}
