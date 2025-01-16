import { Callback } from '../../types/Callback.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the running total (using `+`) of all the callback return values.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  sum method calls the callback function one time for each
 *  element in the array.
 */
export const cume = <T>(
  arr: readonly T[],
  callback?: Callback<T, number>
): Array<number> => {
  let counter = 0;
  if (callback) {
    return arr.map((element, index) => {
      counter += callback(element, index, arr);
      return counter;
    });
  }

  return arr.map(e => {
    if (typeof e === 'number') {
      counter += e;
    }

    return counter;
  });
};
