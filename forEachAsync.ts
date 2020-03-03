export {};

declare global {
  interface Array<T> {
    forEachAsync(callback: (element: T, index: number, array: T[]) => Promise<void>): Promise<void>;
  }
}

if (!Array.prototype.forEachAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.forEachAsync = async function forEachAsync<T>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => Promise<void>
  ) {
    await Promise.all(this.map(callback));
  };
}
