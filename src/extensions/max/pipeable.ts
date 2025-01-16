import { asPipeable } from '../../helpers/asPipeable.js';
import { max as original } from './max.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the largest (using `>`) of all the callback return values, or
 * `null` if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  max method calls the callback function one time for each
 *  element in the array.
 */
export const max = asPipeable(original);
