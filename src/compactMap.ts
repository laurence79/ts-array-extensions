export {}

declare global {
  interface Array<T> {
    compactMap<U>(callback: (element: T, index: number, array: T[]) => void | undefined | U): U[]
  }
}

if (!Array.prototype.compactMap) {
  Array.prototype.compactMap = function <T, U>(this: T[], callback: (element: T, index: number, collection: T[]) => void | undefined | U): U[] {
    return this.reduce((memo, element, index, collection) => {
      const maybe = callback(element, index, collection)
      if (maybe !== null && typeof maybe !== 'undefined') {
        memo.push(maybe)
      }
      return memo
    }, <U[]>[])
  }
}