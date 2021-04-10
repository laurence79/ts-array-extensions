/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Iterates over each element of an array, and returns the total (using `+`)
     * of all the elements, or zero if the array is empty.
     *
     * @returns the total of all the elements.
     */
    sum(): number;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the total (using `+`) of all the callback return values, or
     * zero if the array is empty.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  sum method calls the callbackfn function one time for each
     *  element in the array.
     */
    sum(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => number
    ): number;
  }

  interface Array<T> {
    /**
     * Iterates over each element of an array, and returns the total (using `+`)
     * of all the elements, or zero if the array is empty.
     *
     * @returns the total of all the elements.
     */
    sum(): number;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the total (using `+`) of all the callback return values, or
     * zero if the array is empty.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  sum method calls the callbackfn function one time for each
     *  element in the array.
     */
    sum(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => number
    ): number;
  }
}

if (!Array.prototype.sum) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.sum = function sum<T>(
    this: ReadonlyArray<T>,
    callback?: (element: T, index: number, array: ReadonlyArray<T>) => number
  ): number {
    let counter = 0;
    if (callback) {
      this.forEach((element, index) => {
        counter += callback(element, index, this);
      });
    } else {
      this.forEach(e => {
        if (typeof e === 'number') {
          counter += e;
        }
      });
    }
    return counter;
  };
}
