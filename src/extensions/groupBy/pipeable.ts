import { asPipeable } from '../../helpers/asPipeable.js';
import { groupBy as original } from './groupBy.js';

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
export const groupBy = asPipeable(original);
