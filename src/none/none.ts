export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ReadonlyArray<T> {
    /**
     * Returns a boolean indicating whether the array is empty.
     *
     * @returns `true` if the array is empty.
     */
    none(): boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns a boolean indicating whether the array is empty.
     *
     * @returns `true` if the array is empty.
     */
    none(): boolean;
  }
}

if (!Array.prototype.none) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.none = function none<T>(this: ReadonlyArray<T>): boolean {
    return this.length === 0;
  };
}
