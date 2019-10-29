export {}

declare global {
  interface Array<T> {
    forEachAsync(callback: (element: T, index: number, array: T[]) => Promise<void>): Promise<void>
  }
}

if (!Array.prototype.forEachAsync) {
  Array.prototype.forEachAsync = async function <T>(this: T[], callback: (element: T, index: number, array: T[]) => Promise<void>) {
    for (let index = 0; index < this.length; index++) {
      await callback(this[index], index, this);
    }
  }
}