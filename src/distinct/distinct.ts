export {};

declare global {
  interface Array<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * unique.
     *
     * @returns A new array with the results
     */
    distinct(): T[];
  }
}

if (!Array.prototype.distinct) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.distinct = function distinct<T>(this: T[]): T[] {
    return [...new Set(this)];
  };
}
