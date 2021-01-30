import { Key, KeyValuePair } from '../types';

declare global {
  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with the last of the elements that have the same key.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with the last of the elements matching
     *  each key.
     */
    toRecord<K extends Key>(
      callback: (element: T, index: number, array: T[]) => K
    ): Record<K, T>;

    /**
     * Calls a pair of defined callback functions on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with the last of the return values of the value
     * callback function with that key.
     *
     * @param keyCallbackFn - A function that accepts up to three arguments. The
     *  groupBy method calls the keyCallbackfn function one time for each
     *  element in the array.
     * @param valueCallbackFn - A function that accepts up to three arguments.
     *  The groupBy method calls the valueCallbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with that last of the values matching
     *  each key.
     */
    toRecord<K extends Key, V>(
      keyCallback: (element: T, index: number, array: T[]) => K,
      valueCallback: (element: T, index: number, array: T[]) => V
    ): Record<K, V>;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the `key` property of the return values,
     * associated with the last of the `value` properties of the return value.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  toRecord method calls the callbackfn function one time for each
     *  element in the array. This function must return an object:
     *  ```ts
     *  {
     *    key: '<>',
     *    value: '<>'
     *  }
     *  ```
     *
     * @returns A Record keyed by group, with the last of the values matching
     *  each key.
     */
    toRecord<K extends Key, V>(
      callback: (element: T, index: number, array: T[]) => KeyValuePair<K, V>
    ): Record<K, V>;
  }
}

if (!Array.prototype.toRecord) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.toRecord = function toRecord<T, K extends Key, V>(
    this: T[],
    callback1: (
      element: T,
      index: number,
      collection: T[]
    ) => KeyValuePair<K, V> | K,
    callback2?: (element: T, index: number, collection: T[]) => V
  ): Record<K, V> {
    return this.reduce((memo, element, index, collection) => {
      const result1 = callback1(element, index, collection);
      const result2 = callback2?.(element, index, collection);
      const key =
        typeof result1 === 'object' && 'key' in result1 ? result1.key : result1;
      const value =
        typeof result1 === 'object' && 'value' in result1
          ? result1.value
          : result2 ?? element;
      return {
        ...memo,
        [key]: value
      };
    }, {} as Record<K, V>);
  };
}
