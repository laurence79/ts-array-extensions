export {}

declare global {
  interface Array<T> {
    compactMapAsync<U>(callback: (element: T, index: number, array: T[]) => Promise<void | undefined | U>): Promise<U[]>
  }
}

if (!Array.prototype.compactMapAsync) {
  Array.prototype.compactMapAsync = async function <T, U>(this: T[], callback: (element: T, index: number, array: T[]) => Promise<void | undefined | U>): Promise<U[]> {
    let r: U[] = []
    for (let index = 0; index < this.length; index++) {
      const maybe = await callback(this[index], index, this)
      if (maybe !== null && typeof maybe !== 'undefined') {
        r.push(maybe)
      }
    }
    return r
  }
}