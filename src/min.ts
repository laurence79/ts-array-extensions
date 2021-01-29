/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    min(): T | null;
    min<V extends string | number>(
      callback: (element: T, index: number, array: T[]) => V
    ): V | null;
  }
}

if (!Array.prototype.min) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.min = function min<T, V>(
    this: T[],
    callback?: (element: T, index: number, array: T[]) => V
  ): V | null {
    let minValue: T | V | null = null;
    this.forEach((element, index) => {
      const t = callback?.(element, index, this) ?? element;
      if (minValue === null || minValue > t) {
        minValue = t;
      }
    });
    return minValue;
  };
}
