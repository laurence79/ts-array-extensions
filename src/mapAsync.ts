export {};

declare global {
  interface Array<T> {
    mapAsync<U>(
      callback: (element: T, index: number, array: T[]) => Promise<U>
    ): Promise<U[]>;
  }
}

if (!Array.prototype.mapAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.mapAsync = function mapAsync<T, U>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => Promise<U>
  ): Promise<U[]> {
    return Promise.all(
      this.map((element, index) => callback(element, index, this))
    );
  };
}
