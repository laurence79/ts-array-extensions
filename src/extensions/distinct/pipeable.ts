import { asPipeable } from '../../helpers/asPipeable.js';
import { distinct as original } from './distinct.js';

/**
 * Returns an array that contains all of the elements of this array that are
 * unique based on the defined comparer function.
 *
 * @param comparerFn - An optional function that accepts two arguments.
 *  The distinct method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array with the results
 */
export const distinct = asPipeable(original);
