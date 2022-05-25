import { Key } from '../types/Key';
import { KeyValuePair } from '../types/KeyValuePair';

export const recordToArray = <K extends Key, V>(
  record: Record<K, V>
): Array<KeyValuePair<K, V>> => {
  return Object.entries(record).map(([key, value]) => [key as K, value as V]);
};
