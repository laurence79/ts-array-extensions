import { Callback } from '../../types/Callback.js';
import { cume } from './cume.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the running total (using `+`) of all the callback return values.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  sum method calls the callback function one time for each
     *  element in the array.
     */
    cume(callback?: Callback<T, number>): Array<number>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the running total (using `+`) of all the callback return values.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  sum method calls the callback function one time for each
     *  element in the array.
     */
    cume(callback?: Callback<T, number>): Array<number>;
  }
}

if (!Array.prototype.cume) {
  Array.prototype.cume = function (this, ...args) {
    return cume(this, ...args);
  };
}
