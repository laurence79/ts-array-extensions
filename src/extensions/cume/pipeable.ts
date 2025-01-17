import { asPipeable } from '../../helpers/asPipeable.js';
import { cume as original } from './cume.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns the running total (using `+`) of all the callback return values.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  sum method calls the callback function one time for each
 *  element in the array.
 */
export const cume = asPipeable(original);
