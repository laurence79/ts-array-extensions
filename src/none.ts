export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    none(): boolean;
  }
}

if (!Array.prototype.none) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.none = function none<T>(this: T[]): boolean {
    return this.length === 0;
  };
}
