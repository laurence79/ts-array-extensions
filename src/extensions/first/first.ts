import { Callback } from '../../types/Callback.js';

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
export const first = <T>(
  arr: readonly T[],
  callback?: Callback<T, boolean>
): T | undefined => {
  if (!callback) {
    if (arr.length > 0) {
      return arr[0];
    }
  }
  if (callback) {
    for (const [index, el] of arr.entries()) {
      if (callback(el, index, arr)) {
        return el;
      }
    }
  }
  return undefined;
};
