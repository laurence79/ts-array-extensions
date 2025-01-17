import { Callback } from '../../types/Callback.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  last method calls the callback function up to one time for each
     *  element in the array.
     *
     * @returns The last element where the callback returned true, or if none
     *  do then `undefined`
     */
    last(callback?: Callback<T, boolean>): T | undefined;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  last method calls the callback function up to one time for each
     *  element in the array.
     *
     * @returns The last element where the callback returned true, or if none
     *  do then `undefined`
     */
    last(callback: Callback<T, boolean>): T | undefined;
  }
}

if (!Array.prototype.last) {
  Array.prototype.last = function last<T>(
    this: ReadonlyArray<T>,
    callback?: (element: T, index: number, array: ReadonlyArray<T>) => boolean
  ): T | undefined {
    if (!callback) {
      if (this.length > 0) {
        return this[this.length - 1];
      }
      return undefined;
    }

    return this.reduce<undefined | T>((memo, element, index) => {
      if (callback(element, index, this)) {
        return element;
      }
      return memo;
    }, undefined);
  };
}
