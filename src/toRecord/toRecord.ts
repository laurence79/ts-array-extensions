import { Key } from '../types';

declare global {
  interface ReadonlyArray<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with an array of the elements that have the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with an array of elements matching
     *  each key.
     */
    toRecord<K extends Key>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K
    ): Record<K, Array<T>>;

    /**
     * Calls a defined callback function on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with the return value of the aggregator function for
     * the array of elements with the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the keyExtractFn function one time for each
     *  element in the array.
     * @param aggregatorFn - A function that accepts one argument.
     *  The toRecord method calls the aggregatorFn function one time for each
     *  set of elements with the same key.
     *
     * @returns A Record keyed by group, with the aggregation result as the
     *  value.
     */
    toRecord<K extends Key, V>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
      aggregatorFn: (elements: ReadonlyArray<T>) => V
    ): Record<K, V>;
  }

  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with an array of the elements that have the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with an array of elements matching
     *  each key.
     */
    toRecord<K extends Key>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K
    ): Record<K, Array<T>>;

    /**
     * Calls a defined callback function on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with the return value of the aggregator function for
     * the array of elements with the same key.
     *
     * @param keyExtractFn - A function that accepts up to three arguments. The
     *  toRecord method calls the keyExtractFn function one time for each
     *  element in the array.
     * @param aggregatorFn - A function that accepts one argument.
     *  The toRecord method calls the aggregatorFn function one time for each
     *  set of elements with the same key.
     *
     * @returns A Record keyed by group, with the aggregation result as the
     *  value.
     */
    toRecord<K extends Key, V>(
      keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
      aggregatorFn: (elements: ReadonlyArray<T>) => V
    ): Record<K, V>;
  }
}

if (!Array.prototype.toRecord) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.toRecord = function toRecord<T, K extends Key, V>(
    this: ReadonlyArray<T>,
    keyExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => K,
    aggregatorFn?: (elements: ReadonlyArray<T>) => V
  ): Record<K, Array<T>> | Record<K, V> {
    const intermediate = this.reduce((memo, element, index, collection) => {
      const key = keyExtractFn(element, index, collection);
      const value = [...(memo[key] ?? []), element];
      return {
        ...memo,
        [key]: value
      };
    }, {} as Record<K, Array<T>>);

    if (!aggregatorFn) {
      return intermediate;
    }

    return Object.keys(intermediate).reduce((memo, key) => {
      const values = intermediate[key as K];
      return {
        ...memo,
        [key]: aggregatorFn(values)
      };
    }, {} as Record<K, V>);
  };
}
