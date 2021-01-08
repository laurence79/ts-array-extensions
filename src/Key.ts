export type Key = string | number | symbol;

export type KeyValuePair<K extends Key, V> = { key: K; value: V };
