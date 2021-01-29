import { Key, KeyValuePair } from './types';

export {};

declare global {
  interface Array<T> {
    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the return value of the callback function,
     * associated with an array of elements that have the same key.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  groupBy method calls the callbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with an array of elements matching each
     *  key.
     */
    groupBy<K extends Key>(
      callbackFn: (element: T, index: number, array: T[]) => K
    ): Record<K, T[]>;

    /**
     * Calls a pair of defined callback functions on each element of an array,
     * and returns a Record keyed by the return value of the key callback
     * function, associated with an array of return values of the value
     * callback function with that key.
     *
     * @param keyCallbackFn - A function that accepts up to three arguments. The
     *  groupBy method calls the keyCallbackfn function one time for each
     *  element in the array.
     * @param valueCallbackFn - A function that accepts up to three arguments.
     *  The groupBy method calls the valueCallbackfn function one time for each
     *  element in the array.
     *
     * @returns A Record keyed by group, with an array of values matching each
     *  key.
     */
    groupBy<K extends Key, V>(
      keyCallbackFn: (element: T, index: number, array: T[]) => K,
      valueCallbackFn: (element: T, index: number, array: T[]) => V
    ): Record<K, V[]>;

    /**
     * Calls a defined callback function on each element of an array, and
     * returns a Record keyed by the `key` property of the return values,
     * associated with an array of the `value` properties of the return value.
     *
     * @param callbackFn - A function that accepts up to three arguments. The
     *  groupBy method calls the callbackfn function one time for each
     *  element in the array. This function must return an object:
     *  ```ts
     *  {
     *    key: '<>',
     *    value: '<>'
     *  }
     *  ```
     *
     * @returns A Record keyed by group, with an array of values matching each
     *  key.
     */
    groupBy<K extends Key, V>(
      callbackFn: (element: T, index: number, array: T[]) => KeyValuePair<K, V>
    ): Record<K, V[]>;
  }
}

if (!Array.prototype.groupBy) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.groupBy = function groupBy<T, K extends Key, V>(
    this: T[],
    callbackFn1: (
      element: T,
      index: number,
      collection: T[]
    ) => KeyValuePair<K, V> | K,
    callbackFn2?: (element: T, index: number, collection: T[]) => V
  ): Record<K, (V | T)[]> {
    return this.reduce((memo, element, index, collection) => {
      const result1 = callbackFn1(element, index, collection);
      const result2 = callbackFn2?.(element, index, collection);
      const key =
        typeof result1 === 'object' && 'key' in result1 ? result1.key : result1;
      const value =
        typeof result1 === 'object' && 'value' in result1
          ? result1.value
          : result2 ?? element;
      if (typeof memo[key] === 'undefined') {
        return {
          ...memo,
          [key]: [value]
        };
      }
      memo[key].push(value);
      return memo;
    }, {} as Record<K, (T | V)[]>);
  };
}
