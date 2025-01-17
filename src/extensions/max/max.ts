import type { Callback } from '../../types/Callback.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the largest (using `>`) of all the callback return values, or
 * `null` if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  max method calls the callback function one time for each
 *  element in the array.
 */
export const max = <T, V>(
  arr: readonly T[],
  callback?: Callback<T, V>
): V | null => {
  let maxValue: T | V | null = null;
  arr.forEach((element, index) => {
    const t = callback?.(element, index, arr) ?? element;
    if (maxValue === null || typeof maxValue === 'undefined' || maxValue < t) {
      maxValue = t;
    }
  });
  return maxValue;
};
