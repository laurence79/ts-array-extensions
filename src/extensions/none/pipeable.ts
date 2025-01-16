import { asPipeable } from '../../helpers/asPipeable.js';
import { none as original } from './none.js';

/**
 * Returns a boolean indicating whether the array is empty.
 *
 * @returns `true` if the array is empty.
 */
export const none = asPipeable(original);
