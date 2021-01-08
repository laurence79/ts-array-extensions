export {};

declare global {
  interface Array<T> {
    outerJoin<U>(
      other: Array<U>,
      on: (left: T, right: U) => boolean
    ): (
      | { left: T; right: U }
      | { left: T; right: U | null }
      | { left: T | null; right: U }
    )[];
  }
}

if (!Array.prototype.outerJoin) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.outerJoin = function outerJoin<T, U>(
    this: T[],
    other: Array<U>,
    on: (left: T, right: U) => boolean
  ): (
    | { left: T; right: U }
    | { left: T; right: U | null }
    | { left: T | null; right: U }
  )[] {
    const unmatchedLeft = new Set(this);
    const unmatchedRight = new Set(other);
    const pairs: { left: T; right: U }[] = [];
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
