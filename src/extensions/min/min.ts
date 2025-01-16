import type { Callback } from '../../types/Callback.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the smallest (using `<`) of all the callback return values, or
 * `null` if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  min method calls the callback function one time for each
 *  element in the array.
 */
export const min = <T, V>(
  arr: readonly T[],
  callback?: Callback<T, V>
): V | null => {
  let minValue: T | V | null = null;
  arr.forEach((element, index) => {
    const t = callback?.(element, index, arr) ?? element;
    if (minValue === null || typeof minValue === 'undefined' || minValue > t) {
      minValue = t;
    }
  });
  return minValue;
};
