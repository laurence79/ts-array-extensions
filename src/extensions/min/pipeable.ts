import { asPipeable } from '../../helpers/asPipeable.js';
import { min as original } from './min.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the smallest (using `<`) of all the callback return values, or
 * `null` if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  min method calls the callback function one time for each
 *  element in the array.
 */
export const min = asPipeable(original);
