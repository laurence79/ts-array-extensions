export const map = <T>(...args: Parameters<Array<T>['map']>) => {
  return (input: ReadonlyArray<T>) => Array.prototype.map.bind(input)(...args);
};
