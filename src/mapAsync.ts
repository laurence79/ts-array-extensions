export {};

declare global {
  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns an array that contains all of the results, awaited.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  mapAsync method calls and awaits the callbackfn function one time
     *  for each element in the array.
     *
     * @returns A promise which resolves to a new array with the results
     */
    mapAsync<U>(
      callback: (element: T, index: number, array: T[]) => Promise<U>
    ): Promise<U[]>;
  }
}

if (!Array.prototype.mapAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.mapAsync = function mapAsync<T, U>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => Promise<U>
  ): Promise<U[]> {
    return Promise.all(
      this.map((element, index) => callback(element, index, this))
    );
  };
}
