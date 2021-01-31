import { Comparer, defaultComparer } from '../types';

export {};

declare global {
  interface Array<T> {
    /**
     * Finds matching elements between two arrays.
     *
     * @param other - The other array to union with.
     * @param comparerFn - An optional function that accepts two arguments.
     *  The union method calls the comparerFn function to determine the
     *  equality of values. Triple equal `===` comparison is used by default.
     *
     * @returns A new array containing only the matching elements.
     */
    union(other: T[], comparerFn?: Comparer<T>): T[];
  }
}

if (!Array.prototype.union) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.union = function union<T>(
    this: T[],
    other: T[],
    arg2?: Comparer<T>
  ): T[] {
    const comparerFn = arg2 ?? defaultComparer<T>();

    return this.reduce((memo, element) => {
      if (
        other.some(v => comparerFn(v, element)) &&
        !memo.some(v => comparerFn(v, element))
      ) {
        memo.push(element);
      }
      return memo;
    }, [] as T[]);
  };
}
