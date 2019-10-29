export {}

declare global {
  interface Array<T> {
    mapAsync<U>(callback: (element: T, index: number, array: T[]) => Promise<U>): Promise<U[]>
  }
}

if (!Array.prototype.mapAsync) {
  Array.prototype.mapAsync = async function <T, U>(this: T[], callback: (element: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
    let r: U[] = []
    for (let index = 0; index < this.length; index++) {
      r.push(await callback(this[index], index, this))
    }
    return r
  }
}