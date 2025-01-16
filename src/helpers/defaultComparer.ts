import { Comparer } from '../types/Comparer.js';

export const defaultComparer =
  <K>(): Comparer<K> =>
  (a, b) =>
    a === b;
