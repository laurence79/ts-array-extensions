/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    min(
      callback: (element: T, index: number, array: T[]) => number
    ): number | null;
  }
}

if (!Array.prototype.min) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.min = function min<T>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => number
  ): number | null {
    let minValue: number | null = null;
    this.forEach((element, index) => {
      const t = callback(element, index, this);
      if (minValue === null || minValue > t) {
        minValue = t;
      }
    });
    return minValue;
  };
}
