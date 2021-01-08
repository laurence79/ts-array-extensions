/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    first(): T | undefined;
    first(
      callback: (element: T, index: number, array: T[]) => boolean
    ): T | undefined;
  }
}

if (!Array.prototype.first) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.first = function first<T>(
    this: T[],
    callback?: (element: T, index: number, array: T[]) => boolean
  ): T | undefined {
    if (!callback) {
      if (this.length > 0) {
        return this[0];
      }
    }
    if (callback) {
      for (const [index, el] of this.entries()) {
        if (callback(el, index, this)) {
          return el;
        }
      }
    }
    return undefined;
  };
}
