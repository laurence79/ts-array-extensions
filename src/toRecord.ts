import { Key, KeyValuePair } from './Key';

declare global {
  interface Array<T> {
    toRecord<K extends Key, V>(
      callback: (element: T, index: number, array: T[]) => KeyValuePair<K, V>
    ): Record<K, V>;
    toRecord<K extends Key>(
      callback: (element: T, index: number, array: T[]) => K
    ): Record<K, T>;
  }
}

if (!Array.prototype.toRecord) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.toRecord = function toRecord<T, K extends Key, V>(
    this: T[],
    callback: (
      element: T,
      index: number,
      collection: T[]
    ) => KeyValuePair<K, V> | K
  ): Record<K, V> {
    return this.reduce((memo, element, index, collection) => {
      const r = callback(element, index, collection);
      const key = typeof r === 'object' && 'key' in r ? r.key : r;
      const value = typeof r === 'object' && 'key' in r ? r.value : element;
      return {
        ...memo,
        [key]: value
      };
    }, {} as Record<K, V>);
  };
}
