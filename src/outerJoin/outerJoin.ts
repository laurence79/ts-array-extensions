export {};

declare global {
  interface ReadonlyArray<T> {
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
    outerJoin<U>(
      other: ReadonlyArray<U>,
      on: (left: T, right: U) => boolean
    ): Array<
      | { left: T; right: U }
      | { left: T; right: null }
      | { left: null; right: U }
    >;
  }

  interface Array<T> {
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
    outerJoin<U>(
      other: ReadonlyArray<U>,
      on: (left: T, right: U) => boolean
    ): Array<
      | { left: T; right: U }
      | { left: T; right: null }
      | { left: null; right: U }
    >;
  }
}

if (!Array.prototype.outerJoin) {
  Array.prototype.outerJoin = function outerJoin<T, U>(
    this: T[],
    other: ReadonlyArray<U>,
    on: (left: T, right: U) => boolean
  ): Array<
    { left: T; right: U } | { left: T; right: null } | { left: null; right: U }
  > {
    const unmatchedLeft = new Set(this);
    const unmatchedRight = new Set(other);
    const pairs: Array<{ left: T; right: U }> = [];
    this.forEach(left => {
      other.forEach(right => {
        if (on(left, right)) {
          pairs.push({ left, right });
          unmatchedLeft.delete(left);
          unmatchedRight.delete(right);
        }
      });
    });
    const leftOnly = Array.from(unmatchedLeft).map(left => ({
      left,
      right: null
    }));
    const rightOnly = Array.from(unmatchedRight).map(right => ({
      left: null,
      right
    }));
    return [...leftOnly, ...pairs, ...rightOnly];
  };
}
