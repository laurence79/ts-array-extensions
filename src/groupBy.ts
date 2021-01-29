import { Key, KeyValuePair } from './types';

export {};

declare global {
  interface Array<T> {
    groupBy<K extends Key>(
      callback: (element: T, index: number, array: T[]) => K
    ): Record<K, T[]>;
    groupBy<K extends Key, V>(
      callback: (element: T, index: number, array: T[]) => KeyValuePair<K, V>
    ): Record<K, V[]>;
    groupBy<K extends Key, V>(
      keyCallback: (element: T, index: number, array: T[]) => K,
      valueCallback: (element: T, index: number, array: T[]) => V
    ): Record<K, V[]>;
  }
}

if (!Array.prototype.groupBy) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.groupBy = function groupBy<T, K extends Key, V>(
    this: T[],
    callback1: (
      element: T,
      index: number,
      collection: T[]
    ) => KeyValuePair<K, V> | K,
    callback2?: (element: T, index: number, collection: T[]) => V
  ): Record<K, (V | T)[]> {
    return this.reduce((memo, element, index, collection) => {
      const result1 = callback1(element, index, collection);
      const result2 = callback2?.(element, index, collection);
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
