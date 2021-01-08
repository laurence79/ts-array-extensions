/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    max(
      callback: (element: T, index: number, array: T[]) => number
    ): number | null;
  }
}

if (!Array.prototype.max) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.max = function max<T>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => number
  ): number | null {
    let maxValue: number | null = null;
    this.forEach((element, index) => {
      const t = callback(element, index, this);
      if (maxValue === null || maxValue < t) {
        maxValue = t;
      }
    });
    return maxValue;
  };
}
