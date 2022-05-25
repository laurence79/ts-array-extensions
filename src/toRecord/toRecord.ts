import { Key } from '../types';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with the last element that has the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by the result of keyExtractFn, with the value as
     *  the last element matching each key.
     */
    toRecord<K extends Key>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K
    ): Record<K, T>;

    /**
     * Calls a defined callback function on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with the last return value of the value function for
     * elements with the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the keyExtractFn function one time for each
     *  element in the array.
     * @param valueExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the valueExtractFn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by the result of keyExtractFn, with the values as
     *  the result of valueExtractFn
     */
    toRecord<K extends Key, V>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
      valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V
    ): Record<K, V>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with the last element that has the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by the result of keyExtractFn, with the value as
     *  the last element matching each key.
     */
    toRecord<K extends Key>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K
    ): Record<K, T>;

    /**
     * Calls a defined callback function on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with the last return value of the value function for
     * elements with the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the keyExtractFn function one time for each
     *  element in the array.
     * @param valueExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the valueExtractFn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by the result of keyExtractFn, with the values as
     *  the result of valueExtractFn
     */
    toRecord<K extends Key, V>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
      valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V
    ): Record<K, V>;
  }
}

if (!Array.prototype.toRecord) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.toRecord = function toRecord<T, K extends Key, V>(
    this: ReadonlyArray<T>,
    keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
    valueExtractFn?: (element: T, index: number, array: ReadonlyArray<T>) => V
  ): Record<K, T> | Record<K, V> {
    const entries = this.map(
      (element, index, array) =>
        [
          keyExtractFn(element, index, array),
          valueExtractFn ? valueExtractFn(element, index, array) : element
        ] as const
    );

    return Object.fromEntries(entries) as Record<K, T> | Record<K, V>;
  };
}
