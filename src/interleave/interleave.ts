export {};

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each pair of consecutive elements of
     * an array, and returns an array with the result of the callback function
     * inserted between the elements with which it was called.
     *
     * @param callbackFn - A function that accepts two arguments. The
     *  interleave method calls the callbackfn function one time for each
     *  pair of consecutive element in the array.
     *
     * @returns A new array with additional elements inserted between each
     *  element.
     */
    interleave<U>(
      callbackFn: (previousElement: T, nextElement: T) => U
    ): Array<T | U>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each pair of consecutive elements of
     * an array, and returns an array with the result of the callback function
     * inserted between the elements with which it was called.
     *
     * @param callbackFn - A function that accepts two arguments. The
     *  interleave method calls the callbackfn function one time for each
     *  pair of consecutive element in the array.
     *
     * @returns A new array with additional elements inserted between each
     *  element.
     */
    interleave<U>(
      callbackFn: (previousElement: T, nextElement: T) => U
    ): Array<T | U>;
  }
}

if (!Array.prototype.interleave) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.interleave = function interleave<T, U>(
    this: ReadonlyArray<T>,
    callbackFn: (previousElement: T, nextElement: T) => U
  ): Array<T | U> {
    const r: Array<T | U> = [];
    for (let index = 0; index < this.length; index += 1) {
      r.push(this[index]);
      if (index !== this.length - 1) {
        r.push(callbackFn(this[index], this[index + 1]));
      }
    }
    return r;
  };
}
