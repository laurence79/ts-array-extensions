import { defaultComparer } from '../../helpers/defaultComparer.js';
import type { Comparer } from '../../types/Comparer.js';

/**
 * Finds matching elements between two arrays.
 *
 * @param other - The other array to union with.
 * @param comparerFn - An optional function that accepts two arguments.
 *  The union method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array containing only the matching elements.
 */
export const union = <T>(
  arr: readonly T[],
  other: readonly T[],
  arg2?: Comparer<T>
): T[] => {
  const comparerFn = arg2 ?? defaultComparer<T>();

  return arr.reduce<Array<T>>((memo, element) => {
    if (
      other.some(v => comparerFn(v, element)) &&
      !memo.some(v => comparerFn(v, element))
    ) {
      memo.push(element);
    }
    return memo;
  }, []);
};
