import { asPipeable } from '../../helpers/asPipeable.js';
import { any as original } from './any.js';

/**
 * Returns a boolean indicating whether the array contains any elements.
 *
 * @returns `true` if the array is not empty.
 */
export const any = asPipeable(original);
