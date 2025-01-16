import { Comparer, defaultComparer } from '../types/Comparer.js';

export {};

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
  Array.prototype.except = function except<T>(
    this: ReadonlyArray<T>,
    other: ReadonlyArray<T>,
    arg2?: Comparer<T>
  ): Array<T> {
    const comparerFn = arg2 ?? defaultComparer<T>();

    return this.reduce<Array<T>>((memo, element) => {
      if (
        !other.some(v => comparerFn(v, element)) &&
        !memo.some(v => comparerFn(v, element))
      ) {
        memo.push(element);
      }
      return memo;
    }, []);
  };
}
