import { compact } from './compact.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * not `null` or `undefined`.
     *
     * @returns A new array with the results
     */
    compact(): Array<NonNullable<T>>;
  }

  interface Array<T> {
    /**
     * Returns an array that contains all of the elements of this array that are
     * not `null` or `undefined`.
     *
     * @returns A new array with the results
     */
    compact(): Array<NonNullable<T>>;
  }
}

if (!Array.prototype.compact) {
  Array.prototype.compact = function (this) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return compact(this);
  };
}
