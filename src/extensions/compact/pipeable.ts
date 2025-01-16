import { asPipeable } from '../../helpers/asPipeable.js';
import { compact as original } from './compact.js';

/**
 * Returns an array that contains all of the elements of this array that are
 * not `null` or `undefined`.
 *
 * @returns A new array with the results
 */
export const compact = asPipeable(original);
