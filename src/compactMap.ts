export {};

declare global {
  interface Array<T> {
    compactMap<U>(callback: (element: T, index: number, array: T[]) => void | undefined | U): U[];
  }
}

if (!Array.prototype.compactMap) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compactMap = function compactMap<T, U>(
    this: T[],
    callback: (element: T, index: number, collection: T[]) => void | undefined | U
  ): U[] {
    return this.reduce((memo, element, index, collection) => {
      const maybe = callback(element, index, collection);
      if (maybe !== null && typeof maybe !== 'undefined') {
        memo.push(maybe);
      }
      return memo;
    }, [] as U[]);
  };
}
