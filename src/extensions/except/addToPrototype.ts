import type { Comparer } from '../../types/Comparer.js';
import { except } from './except.js';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Finds elements in this array that don't appear in the other.
     *
     * @param other - The other array to compare with.
     * @param comparerFn - An optional function that accepts two arguments.
     *  The union method calls the comparerFn function to determine the
     *  equality of values. Triple equal `===` comparison is used by default.
     *
     * @returns A new array containing only the elements in this array that
     *  don't appear in the other.
     */
    except(other: ReadonlyArray<T>, comparerFn?: Comparer<T>): Array<T>;
  }

  interface Array<T> {
    /**
     * Finds elements in this array that don't appear in the other.
     *
     * @param other - The other array to compare with.
     * @param comparerFn - An optional function that accepts two arguments.
     *  The union method calls the comparerFn function to determine the
     *  equality of values. Triple equal `===` comparison is used by default.
     *
     * @returns A new array containing only the elements in this array that
     *  don't appear in the other.
     */
    except(other: ReadonlyArray<T>, comparerFn?: Comparer<T>): Array<T>;
  }
}

if (!Array.prototype.except) {
  Array.prototype.except = function (this, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return except(this, ...args);
  };
}
