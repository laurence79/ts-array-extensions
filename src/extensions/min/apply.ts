import type { Callback } from '../../types/Callback.js';
import { min } from './min.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the smallest (using `<`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  min method calls the callback function one time for each
     *  element in the array.
     */
    min<V extends string | number>(callback?: Callback<T, V>): V | null;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns the smallest (using `<`) of all the callback return values, or
     * `null` if the array is empty.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  min method calls the callback function one time for each
     *  element in the array.
     */
    min<V extends string | number>(callback?: Callback<T, V>): V | null;
  }
}

if (!Array.prototype.min) {
  Array.prototype.min = function (this, ...args) {
    return min(this, ...args);
  };
}
