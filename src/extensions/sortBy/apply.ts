import { sortBy } from './sortBy.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a new array sorted by the extracted values
     *
     * @param valueExtractFn - A function that accepts up to three arguments.
     *  The sortBy method calls the callback function one time for each
     *  element in the array.
     *
     * @returns A new array, sorted by the result of valueExtractFn.
     */
    sortBy<V extends string | number | bigint>(
      valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V,
      order?: 'asc' | 'desc'
    ): ReadonlyArray<T>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a new array sorted by the extracted values
     *
     * @param valueExtractFn - A function that accepts up to three arguments.
     *  The sortBy method calls the callback function one time for each
     *  element in the array.
     *
     * @returns A new array, sorted by the result of valueExtractFn.
     */
    sortBy<V extends string | number | bigint>(
      valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V,
      order?: 'asc' | 'desc'
    ): Array<T>;
  }
}

if (!Array.prototype.sortBy) {
  Array.prototype.sortBy = function (this, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return sortBy(this, ...args);
  };
}
