import { asPipeable } from '../../helpers/asPipeable.js';
import { sortBy as original } from './sortBy.js';

/**
 * Calls a defined callback function on each element of an array, and
 * returns a new array sorted by the extracted values
 *
 * @param valueExtractFn - A function that accepts up to three arguments.
 *  The sortBy method calls the callback function one time for each
 *  element in the array.
 *
 * @returns A new array, sorted by the result of valueExtractFn.
 */
export const sortBy = asPipeable(original);
