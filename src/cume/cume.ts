export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Iterates over each element of an array, and returns a running total (using `+`)
     * of all the elements.
     *
     * @returns the total of all the elements.
     */
    cume(): Array<number>;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the running total (using `+`) of all the callback return values.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  sum method calls the callbackfn function one time for each
     *  element in the array.
     */
    cume(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => number
    ): Array<number>;
  }

  interface Array<T> {
    /**
     * Iterates over each element of an array, and returns a running total (using `+`)
     * of all the elements.
     *
     * @returns the total of all the elements.
     */
    cume(): Array<number>;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns the running total (using `+`) of all the callback return values.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  sum method calls the callbackfn function one time for each
     *  element in the array.
     */
    cume(
      callback: (element: T, index: number, array: ReadonlyArray<T>) => number
    ): Array<number>;
  }
}

if (!Array.prototype.cume) {
  Array.prototype.cume = function cume<T>(
    this: ReadonlyArray<T>,
    callback?: (element: T, index: number, array: ReadonlyArray<T>) => number
  ): Array<number> {
    let counter = 0;
    if (callback) {
      return this.map((element, index) => {
        counter += callback(element, index, this);
        return counter;
      });
    }

    return this.map(e => {
      if (typeof e === 'number') {
        counter += e;
      }

      return counter;
    });
  };
}
