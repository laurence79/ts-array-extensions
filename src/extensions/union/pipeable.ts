import { asPipeable } from '../../helpers/asPipeable.js';
import { union as original } from './union.js';

/**
 * Finds matching elements between two arrays.
 *
 * @param other - The other array to union with.
 * @param comparerFn - An optional function that accepts two arguments.
 *  The union method calls the comparerFn function to determine the
 *  equality of values. Triple equal `===` comparison is used by default.
 *
 * @returns A new array containing only the matching elements.
 */
export const union = asPipeable(original);
