export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Performs the specified action for each element in an array,
     * asynchronously.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  forEachAsync method calls the callbackfn function one time
     *  for each element in the array.
     *
     * @returns A promise which resolves when all the callback promises have
     *  resolved.
     */
    forEachAsync(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => Promise<void>
    ): Promise<void>;
  }

  interface Array<T> {
    /**
     * Performs the specified action for each element in an array,
     * asynchronously.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  forEachAsync method calls the callbackfn function one time
     *  for each element in the array.
     *
     * @returns A promise which resolves when all the callback promises have
     *  resolved.
     */
    forEachAsync(
      callbackFn: (
        element: T,
        index: number,
        array: ReadonlyArray<T>
      ) => Promise<void>
    ): Promise<void>;
  }
}

if (!Array.prototype.forEachAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.forEachAsync = async function forEachAsync<T>(
    this: ReadonlyArray<T>,
    callbackFn: (
      element: T,
      index: number,
      array: ReadonlyArray<T>
    ) => Promise<void>
  ) {
    await Promise.all(this.map(callbackFn));
  };
}
