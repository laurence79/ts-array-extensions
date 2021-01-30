import '../mapAsync';
import '../compact';

export {};

declare global {
  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns an array that contains all of the results, awaited, that are not
     * `null` or `undefined`.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  compactMapAsync method calls and awaits the callbackfn function one time
     *  for each element in the array.
     *
     * @returns A promise which resolves to a new array with the results
     */
    compactMapAsync<U>(
      callbackFn: (element: T, index: number, array: T[]) => Promise<U>
    ): Promise<NonNullable<U>[]>;
  }
}

if (!Array.prototype.compactMapAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compactMapAsync = async function compactMapAsync<T, U>(
    this: T[],
    callbackFn: (element: T, index: number, array: T[]) => Promise<U>
  ): Promise<NonNullable<U>[]> {
    const elements = await this.mapAsync(callbackFn);
    return elements.compact();
  };
}
