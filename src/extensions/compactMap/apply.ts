import type { Callback } from '../../types/Callback.js';
import { compactMap } from './compactMap.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns an array that contains all of the results that are not `null`
     * or `undefined`.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  compactMap method calls the callback function one time for each
     *  element in the array.
     *
     * @returns A new array with the results
     */
    compactMap<U>(callback: Callback<T, U | undefined | null>): Array<U>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns an array that contains all of the results that are not `null`
     * or `undefined`.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  compactMap method calls the callback function one time for each
     *  element in the array.
     *
     * @returns A new array with the results
     */
    compactMap<U>(callback: Callback<T, U | undefined | null>): Array<U>;
  }
}

if (!Array.prototype.compactMap) {
  Array.prototype.compactMap = function (this, ...args) {
    return compactMap(this, ...args);
  };
}
