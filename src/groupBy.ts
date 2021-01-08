import { Key, KeyValuePair } from './Key';

export {};

declare global {
  interface Array<T> {
    groupBy<K extends Key, V>(
      callback: (element: T, index: number, array: T[]) => KeyValuePair<K, V>
    ): Record<K, V>;
    groupBy<K extends Key>(
      callback: (element: T, index: number, array: T[]) => K
    ): Record<K, T[]>;
  }
}

if (!Array.prototype.groupBy) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.groupBy = function groupBy<T, K extends Key, V>(
    this: T[],
    callback: (
      element: T,
      index: number,
      collection: T[]
    ) => KeyValuePair<K, V> | K
  ): Record<K, (V | T)[]> {
    return this.reduce((memo, element, index, collection) => {
      const r = callback(element, index, collection);
      const key = typeof r === 'object' && 'key' in r ? r.key : r;
      const value = typeof r === 'object' && 'key' in r ? r.value : element;
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
