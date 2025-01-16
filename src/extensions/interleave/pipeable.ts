import { asPipeable } from '../../helpers/asPipeable.js';
import { interleave as original } from './interleave.js';

/**
 * Calls a defined callback function on each pair of consecutive elements of
 * an array, and returns an array with the result of the callback function
 * inserted between the elements with which it was called.
 *
 * @param callback - A function that accepts two arguments. The
 *  interleave method calls the callback function one time for each
 *  pair of consecutive element in the array.
 *
 * @returns A new array with additional elements inserted between each
 *  element.
 */
export const interleave = asPipeable(original);
