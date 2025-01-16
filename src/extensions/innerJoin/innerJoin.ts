/**
 * Calls a defined callback function on each combination of elements from
 * two arrays to find matching pairs, and returns a new array containing
 * the matching values.
 *
 * @param other - The other array to match (join) against.
 *
 * @param on - A function that accepts two arguments - the pair of elements
 *  from the two arrays. The function should return `true` if the
 *  pair of elements match (should join). The innerJoin method calls the
 *  function one time for each combination of elements from the two arrays.
 *
 * @returns An array of left and right pairs.
 */
export const innerJoin = <T, U>(
  arr: readonly T[],
  other: ReadonlyArray<U>,
  on: (left: T, right: U) => boolean
): Array<{ left: T; right: U }> => {
  const pairs: Array<{ left: T; right: U }> = [];
  arr.forEach(left => {
    other.forEach(right => {
      if (on(left, right)) {
        pairs.push({ left, right });
      }
    });
  });
  return pairs;
};
