export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Returns the last element of an array or `undefined` if it is empty.
     */
    last(): T | undefined;

    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  last method calls the callbackfn function up to one time for each
     *  element in the array.
     *
     * @returns The last element where the callbackFn returned true, or if none
     *  do then `undefined`
     */
    last(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => boolean
    ): T | undefined;
  }

  interface Array<T> {
    /**
     * Returns the last element of an array or `undefined` if it is empty.
     */
    last(): T | undefined;

    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  last method calls the callbackfn function up to one time for each
     *  element in the array.
     *
     * @returns The last element where the callbackFn returned true, or if none
     *  do then `undefined`
     */
    last(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => boolean
    ): T | undefined;
  }
}

if (!Array.prototype.last) {
  Array.prototype.last = function last<T>(
    this: ReadonlyArray<T>,
    callbackFn?: (element: T, index: number, array: ReadonlyArray<T>) => boolean
  ): T | undefined {
    if (!callbackFn) {
      if (this.length > 0) {
        return this[this.length - 1];
      }
      return undefined;
    }

    return this.reduce<undefined | T>((memo, element, index) => {
      if (callbackFn(element, index, this)) {
        return element;
      }
      return memo;
    }, undefined);
  };
}
