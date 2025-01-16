export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Returns the first element of an array or `undefined` if it is empty.
     */
    first(): T | undefined;

    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  first method calls the callbackfn function up to one time for each
     *  element in the array.
     *
     * @returns The first element where the callbackFn returned true, or
     *  `undefined`
     */
    first(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => boolean
    ): T | undefined;
  }

  interface Array<T> {
    /**
     * Returns the first element of an array or `undefined` if it is empty.
     */
    first(): T | undefined;

    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  first method calls the callbackfn function up to one time for each
     *  element in the array.
     *
     * @returns The first element where the callbackFn returned true, or
     *  `undefined`
     */
    first(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => boolean
    ): T | undefined;
  }
}

if (!Array.prototype.first) {
  Array.prototype.first = function first<T>(
    this: ReadonlyArray<T>,
    callbackFn?: (element: T, index: number, array: ReadonlyArray<T>) => boolean
  ): T | undefined {
    if (!callbackFn) {
      if (this.length > 0) {
        return this[0];
      }
    }
    if (callbackFn) {
      for (const [index, el] of this.entries()) {
        if (callbackFn(el, index, this)) {
          return el;
        }
      }
    }
    return undefined;
  };
}
