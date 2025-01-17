import type { Comparer } from '../../types/Comparer.js';
import { distinct } from './distinct.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * unique based on the defined comparer function.
     *
     * @param comparerFn - An optional function that accepts two arguments.
     *  The distinct method calls the comparerFn function to determine the
     *  equality of values. Triple equal `===` comparison is used by default.
     *
     * @returns A new array with the results
     */
    distinct(comparerFn?: Comparer<T>): Array<T>;
  }

  interface Array<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * unique based on the defined comparer function.
     *
     * @param comparerFn - An optional function that accepts two arguments.
     *  The distinct method calls the comparerFn function to determine the
     *  equality of values. Triple equal `===` comparison is used by default.
     *
     * @returns A new array with the results
     */
    distinct(comparerFn?: Comparer<T>): Array<T>;
  }
}

if (!Array.prototype.distinct) {
  Array.prototype.distinct = function (this, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return distinct(this, ...args);
  };
}
