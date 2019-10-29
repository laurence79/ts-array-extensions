import { IndexedValue } from "./IndexedValue";

export interface Index<T> {
  index: { [key: string]: T }
  keys(): string[]
  values(): T[]
  toArray(): Array<IndexedValue<T>>
}