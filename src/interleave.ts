export {};

declare global {
  interface Array<T> {
    interleave<U>(
      callback: (previousElement: T, nextElement: T) => U
    ): Array<T | U>;
  }
}

if (!Array.prototype.interleave) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.interleave = function interleave<T, U>(
    this: T[],
    callback: (previousElement: T, nextElement: T) => U
  ): Array<T | U> {
    const r: (T | U)[] = [];
    for (let index = 0; index < this.length; index += 1) {
      r.push(this[index]);
      if (index !== this.length - 1) {
        r.push(callback(this[index], this[index + 1]));
      }
    }
    return r;
  };
}
