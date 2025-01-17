import type { Callback } from '../../types/Callback.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the total (using `+`) of all the callback return values, or
 * zero if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  sum method calls the callback function one time for each
 *  element in the array.
 */
export const sum = <T>(
  arr: readonly T[],
  callback?: Callback<T, number>
): number => {
  let counter = 0;
  if (callback) {
    arr.forEach((element, index) => {
      counter += callback(element, index, arr);
    });
  } else {
    arr.forEach(e => {
      if (typeof e === 'number') {
        counter += e;
      }
    });
  }
  return counter;
};
