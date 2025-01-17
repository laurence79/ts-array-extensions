import { Callback } from '../../types/Callback.js';

/**
 * Calls a defined callback function on each element of an array until
 * one returns `true` or there are no more elements.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  last method calls the callback function up to one time for each
 *  element in the array.
 *
 * @returns The last element where the callback returned true, or if none
 *  do then `undefined`
 */
export const last = <T>(
  arr: readonly T[],
  callback?: Callback<T, boolean>
): T | undefined => {
  if (!callback) {
    if (arr.length > 0) {
      return arr[arr.length - 1];
    }
    return undefined;
  }

  return arr.reduce<undefined | T>((memo, element, index) => {
    if (callback(element, index, arr)) {
      return element;
    }
    return memo;
  }, undefined);
};
