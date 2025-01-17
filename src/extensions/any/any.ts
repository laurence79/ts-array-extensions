/**
 * Returns a boolean indicating whether the array contains any elements.
 *
 * @returns `true` if the array is not empty.
 */
export const any = <T>(arr: readonly T[]): boolean => {
  return arr.length > 0;
};
