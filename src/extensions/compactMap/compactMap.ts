import { Callback } from '../../types/Callback.js';

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
export const compactMap = <T, U>(
  arr: readonly T[],
  callback?: Callback<T, U | undefined | null>
): Array<U> => {
  return arr.reduce<Array<U>>((memo, element, index, collection) => {
    const maybe = callback?.(element, index, collection);
    if (maybe !== null && typeof maybe !== 'undefined') {
      memo.push(maybe);
    }
    return memo;
  }, []);
};
