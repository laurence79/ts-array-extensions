import type { Comparer } from '../../types/Comparer.js';
import { defaultComparer } from '../../helpers/defaultComparer.js';

/**
 * Finds elements in this array that don't appear in the other.
 *
 * @param other - The other array to compare with.
 * @param comparerFn - An optional function that accepts two arguments.
 *  The union method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array containing only the elements in this array that
 *  don't appear in the other.
 */
export const except = <T>(
  arr: readonly T[],
  other: ReadonlyArray<T>,
  arg2?: Comparer<T>
): Array<T> => {
  const comparerFn = arg2 ?? defaultComparer<T>();

  return arr.reduce<Array<T>>((memo, element) => {
    if (
      !other.some(v => comparerFn(v, element)) &&
      !memo.some(v => comparerFn(v, element))
    ) {
      memo.push(element);
    }
    return memo;
  }, []);
};
