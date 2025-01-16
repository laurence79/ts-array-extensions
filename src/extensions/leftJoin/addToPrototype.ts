import { leftJoin } from './leftJoin.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each combination of elements from
     * two arrays to find matching pairs, and returns a new array containing
     * both unmatched values from this array and matched values.
     *
     * @param other - The other array to match (join) against.
     *
     * @param on - A function that accepts two arguments - the pair of elements
     *  from the two arrays. The function should return `true` if the
     *  pair of elements match (should join). The leftJoin method calls the
     *  function one time for each combination of elements from the two arrays.
     *
     * @returns An array of left and right pairs.
     */
    leftJoin<U>(
      other: ReadonlyArray<U>,
      on: (left: T, right: U) => boolean
    ): Array<{ left: T; right: U } | { left: T; right: null }>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each combination of elements from
     * two arrays to find matching pairs, and returns a new array containing
     * both unmatched values from this array and matched values.
     *
     * @param other - The other array to match (join) against.
     *
     * @param on - A function that accepts two arguments - the pair of elements
     *  from the two arrays. The function should return `true` if the
     *  pair of elements match (should join). The leftJoin method calls the
     *  function one time for each combination of elements from the two arrays.
     *
     * @returns An array of left and right pairs.
     */
    leftJoin<U>(
      other: ReadonlyArray<U>,
      on: (left: T, right: U) => boolean
    ): Array<{ left: T; right: U } | { left: T; right: null }>;
  }
}

if (!Array.prototype.leftJoin) {
  Array.prototype.leftJoin = function (this, ...args) {
    return leftJoin(this, ...args);
  };
}
