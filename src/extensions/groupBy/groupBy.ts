import { defaultComparer } from '../../helpers/defaultComparer.js';
import type { Callback } from '../../types/Callback.js';
import type { Comparer } from '../../types/Comparer.js';
import type { Group } from '../../types/Group.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns a new array of groups keyed by the return value of the callback
 * function, associated with an array of elements that have the same key.
 *
 * @param keyExtractFn - A function that accepts up to three arguments. The
 *  groupBy method calls the keyFn function one time for each
 *  element in the array.
 * @param keyComparerFn - An optional function that accepts two arguments.
 *  The groupBy method calls the keyComparerFn function to determine the
 *  equality of keys. Triple equal `===` comparison is used by default.
 *
 * @returns An array of group elements, each with an array of elements
 *  matching each key.
 */
export const groupBy = <T, K>(
  arr: readonly T[],
  keyExtractFn: Callback<T, K>,
  arg2?: Comparer<K>
): Array<Group<K, T>> => {
  const keyComparerFn = arg2 ?? defaultComparer<K>();

  const r: Array<Group<K, T>> = [];

  arr.forEach((value, index, array) => {
    const key = keyExtractFn(value, index, array);
    let existing = r.find(p => keyComparerFn(key, p.key));
    if (!existing) {
      existing = { key, values: [] };
      r.push(existing);
    }
    existing.values.push(value);
  });

  return r;
};
