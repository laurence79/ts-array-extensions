import { asPipeable } from '../../helpers/asPipeable.js';
import { toRecord as original } from './toRecord.js';

/**
 * Calls a defined callback function on each element of an array,
 * and returns a Record keyed by the return value of the key callback
 * function, associated with the last return value of the value function for
 * elements with the same key.
 *
 * @param keyExtractFn - A function that accepts up to three arguments. The
 *  toRecord method calls the keyExtractFn function one time for each
 *  element in the array.
 * @param valueExtractFn - A function that accepts up to three arguments. The
 *  toRecord method calls the valueExtractFn function one time for each
 *  element in the array.
 *
 * @returns A Record keyed by the result of keyExtractFn, with the values as
 *  the result of valueExtractFn (if supplied), or the last element matching
 *  the key
 */
export const toRecord = asPipeable(original);
