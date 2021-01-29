export {};

declare global {
  interface Array<T> {
    /**
     * Finds matching elements between two arrays.
     *
     * @param other - The other array to union with.
     *
     * @returns A new array containing only the matching elements.
     */
    union(other: T[]): T[];
  }
}

if (!Array.prototype.union) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.union = function union<T>(this: T[], other: T[]): T[] {
    return this.filter(e => other.includes(e));
  };
}
