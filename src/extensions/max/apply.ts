import type { Callback } from '../../types/Callback.js';
import { max } from './max.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the largest (using `>`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  max method calls the callback function one time for each
     *  element in the array.
     */
    max<V extends string | number>(callback?: Callback<T, V>): V | null;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the largest (using `>`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  max method calls the callback function one time for each
     *  element in the array.
     */
    max<V extends string | number>(callback?: Callback<T, V>): V | null;
  }
}

if (!Array.prototype.max) {
  Array.prototype.max = function (this, ...args) {
    return max(this, ...args);
  };
}
