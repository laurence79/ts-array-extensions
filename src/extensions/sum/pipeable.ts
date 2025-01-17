import { asPipeable } from '../../helpers/asPipeable.js';
import { sum as original } from './sum.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the total (using `+`) of all the callback return values, or
 * zero if the array is empty.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  sum method calls the callback function one time for each
 *  element in the array.
 */
export const sum = asPipeable(original);
