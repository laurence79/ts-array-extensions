/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    /**
     * Compares each element of an array, and returns the smallest (using `<`) of
     * all the elements, or `null` if the array is empty.
     *
     * @returns the smallest element.
     */
    min(): T | null;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the smallest (using `<`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  min method calls the callbackfn function one time for each
     *  element in the array.
     */
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
