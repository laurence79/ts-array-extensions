export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    any(): boolean;
  }
}

if (!Array.prototype.any) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.any = function any<T>(this: T[]): boolean {
    return this.length > 0;
  };
}
