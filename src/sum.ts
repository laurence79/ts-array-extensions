/* eslint-disable no-restricted-syntax */
export {};

declare global {
  interface Array<T> {
    sum(): number;
    sum(callback: (element: T, index: number, array: T[]) => number): number;
  }
}

if (!Array.prototype.sum) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.sum = function sum<T>(
    this: T[],
    callback?: (element: T, index: number, array: T[]) => number
  ): number {
    let counter = 0;
    if (callback) {
      this.forEach((element, index) => {
        counter += callback(element, index, this);
      });
    } else {
      this.forEach(e => {
        if (typeof e === 'number') {
          counter += e;
        }
      });
    }
    return counter;
  };
}
