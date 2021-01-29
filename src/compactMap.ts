export {};

declare global {
  interface Array<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * not `null` or `undefined`.
     *
     * @returns A new array with the results
     */
    compactMap(): NonNullable<T>[];

    /**
     * Calls a defined callback function on each element of an array, and
     * returns an array that contains all of the results that are not `null`
     * or `undefined`.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  compactMap method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A new array with the results
     */
    compactMap<U>(
      callbackFn: (
        element: T,
        index: number,
        array: T[]
      ) => void | null | undefined | U
    ): U[];
  }
}

if (!Array.prototype.compactMap) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compactMap = function compactMap<T, U>(
    this: T[],
    callbackFn?: (
      element: T,
      index: number,
      collection: T[]
    ) => void | null | undefined | U
  ): U[] | NonNullable<T>[] {
    if (callbackFn) {
      return this.reduce((memo, element, index, collection) => {
        const maybe = callbackFn?.(element, index, collection);
        if (maybe !== null && typeof maybe !== 'undefined') {
          memo.push(maybe);
        }
        return memo;
      }, [] as U[]);
    }
    return this.reduce((memo, element) => {
      if (element !== null && typeof element !== 'undefined') {
        memo.push(element as NonNullable<T>);
      }
      return memo;
    }, [] as NonNullable<T>[]);
  };
}
