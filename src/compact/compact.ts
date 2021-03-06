export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * not `null` or `undefined`.
     *
     * @returns A new array with the results
     */
    compact(): Array<NonNullable<T>>;
  }

  interface Array<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * not `null` or `undefined`.
     *
     * @returns A new array with the results
     */
    compact(): Array<NonNullable<T>>;
  }
}

if (!Array.prototype.compact) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compact = function compact<T>(
    this: ReadonlyArray<T>
  ): Array<NonNullable<T>> {
    return this.reduce((memo, element) => {
      if (element !== null && typeof element !== 'undefined') {
        memo.push(element as NonNullable<T>);
      }
      return memo;
    }, [] as Array<NonNullable<T>>);
  };
}
