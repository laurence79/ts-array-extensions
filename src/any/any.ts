export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    /**
     * Returns a boolean indicating whether the array contains any elements.
     *
     * @returns `true` if the array is not empty.
     */
    any(): boolean;
  }
}

if (!Array.prototype.any) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.any = function any<T>(this: T[]): boolean {
    return this.length > 0;
  };
}
