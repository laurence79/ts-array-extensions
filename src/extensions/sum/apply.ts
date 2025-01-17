import type { Callback } from '../../types/Callback.js';
import { sum } from './sum.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the total (using `+`) of all the callback return values, or
     * zero if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  sum method calls the callback function one time for each
     *  element in the array.
     */
    sum(callback?: Callback<T, number>): number;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the total (using `+`) of all the callback return values, or
     * zero if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  sum method calls the callback function one time for each
     *  element in the array.
     */
    sum(callback?: Callback<T, number>): number;
  }
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function (this, ...args) {
    return sum(this, ...args);
  };
}
