import { Key } from './Key';

export type KeyValuePair<K extends Key, V> = { key: K; value: V };
