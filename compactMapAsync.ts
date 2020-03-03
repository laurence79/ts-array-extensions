export {};

declare global {
  interface Array<T> {
    compactMapAsync<U>(callback: (element: T, index: number, array: T[]) => Promise<void | undefined | U>): Promise<U[]>;
  }
}

if (!Array.prototype.compactMapAsync) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.compactMapAsync = async function compactMapAsync<T, U>(
    this: T[],
    callback: (element: T, index: number, array: T[]) => Promise<void | undefined | U>
  ): Promise<U[]> {
    const elements = await this.mapAsync(callback);
    return elements.compactMap((element) => element);
  };
}
