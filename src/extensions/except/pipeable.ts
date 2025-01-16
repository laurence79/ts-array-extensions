import { asPipeable } from '../../helpers/asPipeable.js';
import { except as original } from './except.js';

/**
 * Finds elements in this array that don't appear in the other.
 *
 * @param other - The other array to compare with.
 * @param comparerFn - An optional function that accepts two arguments.
 *  The union method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array containing only the elements in this array that
 *  don't appear in the other.
 */
export const except = asPipeable(original);
