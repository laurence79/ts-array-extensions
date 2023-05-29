export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a new array sorted by the extracted values
     *
     * @param valueExtractFn - A function that accepts up to three arguments.
     *  The sortBy method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A new array, sorted by the result of valueExtractFn.
     */
    sortBy<V extends string | number>(
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
     *  The sortBy method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A new array, sorted by the result of valueExtractFn.
     */
    sortBy<V extends string | number>(
      valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V,
      order?: 'asc' | 'desc'
    ): Array<T>;
  }
}

if (!Array.prototype.sortBy) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.sortBy = function sortBy<
    T,
    V extends string | number | bigint
  >(
    this: ReadonlyArray<T>,
    valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V,
    order: 'asc' | 'desc' = 'asc'
  ): T[] {
    const multiplier = order === 'asc' ? 1 : -1;

    return [...this].sort((a, b) => {
      const [valueA, valueB] = [a, b].map(valueExtractFn);

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return (valueA - valueB) * multiplier;
      }

      return String(valueA).localeCompare(String(valueB)) * multiplier;
    });
  };
}
