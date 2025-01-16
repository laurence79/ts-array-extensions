import { asPipeable } from '../../helpers/asPipeable.js';
import { first as original } from './first.js';

/**
 * Calls a defined callback function on each element of an array until
 * one returns `true` or there are no more elements.
 *
 * @param callback - A function that accepts up to three arguments. The
 *  first method calls the callback function up to one time for each
 *  element in the array.
 *
 * @returns The first element where the callback returned true, or
 *  `undefined`
 */
export const first = asPipeable(original);
