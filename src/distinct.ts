export {};

declare global {
  interface Array<T> {
    distinct(): T[];
  }
}

if (!Array.prototype.distinct) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.distinct = function distinct<T>(this: T[]): T[] {
    return [...new Set(this)];
  };
}
