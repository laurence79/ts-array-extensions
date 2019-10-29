export {}

declare global {
  interface Array<T> {
    interleave<U>(callback: (previousElement: T, nextElement: T) => U): Array<T | U>
  }
}

if (!Array.prototype.interleave) {
  Array.prototype.interleave = function <T, U>(this: T[], callback: (previousElement: T, nextElement: T) => U): Array<T | U> {
    let r: (T | U)[] = []
    for (let index = 0; index < this.length; index++) {
      r.push(this[index])
      if (index != this.length - 1) {
        r.push(callback(this[index], this[index + 1]))
      }
    }
    return r
  }
}