import type { Callback } from '../../types/Callback.js';
import { first } from './first.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  first method calls the callback function up to one time for each
     *  element in the array.
     *
     * @returns The first element where the callback returned true, or
     *  `undefined`
     */
    first(callback?: Callback<T, boolean>): T | undefined;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array until
     * one returns `true` or there are no more elements.
     *
     * @param callback - A function that accepts up to three arguments. The
     *  first method calls the callback function up to one time for each
     *  element in the array.
     *
     * @returns The first element where the callback returned true, or
     *  `undefined`
     */
    first(callback?: Callback<T, boolean>): T | undefined;
  }
}

if (!Array.prototype.first) {
  Array.prototype.first = function (this, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return first(this, ...args);
  };
}
