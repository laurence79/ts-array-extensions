import { asPipeable } from '../../helpers/asPipeable.js';
import { outerJoin as original } from './outerJoin.js';

/**
 * Calls a defined callback function on each combination of elements from
 * two arrays to find matching pairs, and returns a new array containing
 * both unmatched and matched values.
 *
 * @param other - The other array to match (join) against.
 *
 * @param on - A function that accepts two arguments - the pair of elements
 *  from the two arrays. The function should return `true` if the
 *  pair of elements match (should join). The outerJoin method calls the
 *  function one time for each combination of elements from the two arrays.
 *
 * @returns An array of left and right pairs.
 */
export const outerJoin = asPipeable(original);
