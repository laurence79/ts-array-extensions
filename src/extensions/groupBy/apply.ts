import type { Callback } from '../../types/Callback.js';
import type { Comparer } from '../../types/Comparer.js';
import type { Group } from '../../types/Group.js';
import { groupBy } from './groupBy.js';

declare global {
  interface ReadonlyArray<T> {
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
    groupBy<K>(
      keyExtractFn: Callback<T, K>,
      keyComparerFn?: Comparer<K>
    ): Array<Group<K, T>>;
  }

  interface Array<T> {
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
    groupBy<K>(
      keyExtractFn: Callback<T, K>,
      keyComparerFn?: Comparer<K>
    ): Array<Group<K, T>>;
  }
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function (this, ...args) {
    return groupBy(this, ...args);
  };
}
