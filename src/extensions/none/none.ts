/**
 * Returns a boolean indicating whether the array is empty.
 *
 * @returns `true` if the array is empty.
 */
export const none = <T>(arr: readonly T[]): boolean => {
  return arr.length === 0;
};
