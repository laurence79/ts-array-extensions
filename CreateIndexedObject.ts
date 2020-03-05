import { Index } from './TheIndex';
import { IndexedValue } from './IndexedValue';

export const CreateIndexedObject = <T>(obj: { [key: string]: T }): Index<T> => ({
  index: obj,
  keys() {
    return Object.keys(obj);
  },
  values() {
    return Object.keys(obj).map((key) => obj[key]);
  },
  toArray(): Array<IndexedValue<T>> {
    return Object.keys(obj).map((key) => ({ key, value: this.index[key] }));
  }
});
