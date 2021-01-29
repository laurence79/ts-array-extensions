import { Key } from '../types/Key';
import { KeyValuePair } from '../types/KeyValuePair';

export const recordToArray = <K extends Key, V>(
  record: Record<K, V>
): Array<KeyValuePair<K, V>> => {
  return Object.keys(record).map(k => {
    const key = k as K;
    return {
      key,
      value: record[key]
    };
  });
};
