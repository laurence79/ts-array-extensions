import { asPipeable } from '../../helpers/asPipeable.js';
import { last as original } from './last.js';

/**
 * Calls a defined callback function on each element of an array until
 * one returns `true` or there are no more elements.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  last method calls the callback function up to one time for each
 *  element in the array.
 *
 * @returns The last element where the callback returned true, or if none
 *  do then `undefined`
 */
export const last = asPipeable(original);
