export {};

declare global {
  interface ReadonlyArray<T> {
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
        array: ReadonlyArray<T>
      ) => null | undefined | U
    ): Array<U>;
  }

  interface Array<T> {
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
        array: ReadonlyArray<T>
      ) => null | undefined | U
    ): Array<U>;
  }
}

if (!Array.prototype.compactMap) {
  Array.prototype.compactMap = function compactMap<T, U>(
    this: ReadonlyArray<T>,
    callbackFn?: (
      element: T,
      index: number,
      collection: ReadonlyArray<T>
    ) => null | undefined | U
  ): Array<U> {
    return this.reduce<Array<U>>((memo, element, index, collection) => {
      const maybe = callbackFn?.(element, index, collection);
      if (maybe !== null && typeof maybe !== 'undefined') {
        memo.push(maybe);
      }
      return memo;
    }, []);
  };
}
