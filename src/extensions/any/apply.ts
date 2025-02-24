import { any } from './any.js';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ReadonlyArray<T> {
    /**
     * Returns a boolean indicating whether the array contains any elements.
     *
     * @returns `true` if the array is not empty.
     */
    any(): boolean;
  }

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
  Array.prototype.any = function (this) {
    return any(this);
  };
}
