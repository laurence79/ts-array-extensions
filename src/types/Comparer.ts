export type Comparer<T> = (a: T, b: T) => boolean;

export function isComparer<T>(fn: unknown): fn is Comparer<T> {
  return typeof fn === 'function' && fn.length === 2;
}

export const defaultComparer =
  <K>(): Comparer<K> =>
  (a, b) =>
    a === b;
