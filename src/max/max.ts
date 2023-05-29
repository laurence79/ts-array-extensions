/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Compares each element of an array, and returns the largest (using `>`) of
     * all the elements, or `null` if the array is empty.
     *
     * @returns the largest element.
     */
    max(): T | null;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the largest (using `>`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  max method calls the callbackfn function one time for each
     *  element in the array.
     */
    max<V extends string | number>(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => V
    ): V | null;
  }

  interface Array<T> {
    /**
     * Compares each element of an array, and returns the largest (using `>`) of
     * all the elements, or `null` if the array is empty.
     *
     * @returns the largest element.
     */
    max(): T | null;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the largest (using `>`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  max method calls the callbackfn function one time for each
     *  element in the array.
     */
    max<V extends string | number>(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => V
    ): V | null;
  }
}

if (!Array.prototype.max) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.max = function max<T, V>(
    this: ReadonlyArray<T>,
    callback?: (element: T, index: number, array: ReadonlyArray<T>) => V
  ): V | null {
    let maxValue: T | V | null = null;
    this.forEach((element, index) => {
      const t = callback?.(element, index, this) ?? element;
      if (
        maxValue === null ||
        typeof maxValue === 'undefined' ||
        maxValue < t
      ) {
        maxValue = t;
      }
    });
    return maxValue;
  };
}
