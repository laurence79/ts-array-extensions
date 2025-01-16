import { defaultComparer } from '../../helpers/defaultComparer.js';
import type { Comparer } from '../../types/Comparer.js';

/**
 * Returns an array that contains all of the elements of this array that are
 * unique based on the defined comparer function.
 *
 * @param comparerFn - An optional function that accepts two arguments.
 *  The distinct method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array with the results
 */
export const distinct = <T>(
  arr: readonly T[],
  arg1?: Comparer<T>
): Array<T> => {
  const comparerFn = arg1 ?? defaultComparer<T>();

  return arr.reduce<Array<T>>((memo, value) => {
    if (!memo.some(v => comparerFn(v, value))) {
      memo.push(value);
    }
    return memo;
  }, []);
};
