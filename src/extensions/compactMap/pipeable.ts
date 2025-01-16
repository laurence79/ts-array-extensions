import { asPipeable } from '../../helpers/asPipeable.js';
import { compactMap as original } from './compactMap.js';

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
export const compactMap = asPipeable(original);
