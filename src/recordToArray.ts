import { Key, KeyValuePair } from './Key';

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
