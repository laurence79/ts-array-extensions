import type { Callback } from '../../types/Callback.js';
import type { Key } from '../../types/Key.js';
import { toRecord } from './toRecord.js';

declare global {
  interface ReadonlyArray<T> {
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
     *  the result of valueExtractFn (if supplied), or the last element macthing
     *  the key
     */
    toRecord<K extends Key, V>(
      keyExtractFn: Callback<T, K>,
      valueExtractFn?: Callback<T, V>
    ): Record<K, V>;
  }

  interface Array<T> {
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
     *  the result of valueExtractFn (if supplied), or the last element macthing
     *  the key
     */
    toRecord<K extends Key, V>(
      keyExtractFn: Callback<T, K>,
      valueExtractFn?: Callback<T, V>
    ): Record<K, V>;
  }
}

if (!Array.prototype.toRecord) {
  Array.prototype.toRecord = function (this, ...args) {
    return toRecord(this, ...args);
  };
}
