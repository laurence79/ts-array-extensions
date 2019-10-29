import { Index } from "./TheIndex";
import { IndexedValue } from "./IndexedValue";
import { CreateIndexedObject } from "./CreateIndexedObject";

declare global {
  interface Array<T> {
    toIndex<U>(callback: (element: T, index: number, array: T[]) => IndexedValue<U>): Index<U>
    toIndex(callback: (element: T, index: number, array: T[]) => string): Index<T>
  }
}

if (!Array.prototype.toIndex) {
  Array.prototype.toIndex = function <T, U>(this: T[], callback: (element: T, index: number, collection: T[]) => string | IndexedValue<U>): Index<T | U> {
    const ix = this.reduce((memo, element, index, collection) => {
      const r = callback(element, index, collection)
      const key = typeof(r) ==='string' ? r : r.key
      const value = typeof(r) ==='string' ? element : r.value
      memo[key] = value
      return memo
    }, <{[key: string]: T | U}>{})
    return CreateIndexedObject(ix)
  }
}