export {};

declare global {
  interface Array<T> {
    union(other: T[]): T[];
  }
}

if (!Array.prototype.union) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.union = function union<T>(this: T[], other: T[]): T[] {
    return this.filter(e => other.includes(e));
  };
}
