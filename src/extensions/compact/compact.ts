/**
 * Returns an array that contains all of the elements of this array that are
 * not `null` or `undefined`.
 *
 * @returns A new array with the results
 */
export const compact = <T>(arr: readonly T[]): Array<NonNullable<T>> => {
  return arr.reduce<Array<NonNullable<T>>>((memo, element) => {
    if (element !== null && typeof element !== 'undefined') {
      memo.push(element as NonNullable<T>);
    }
    return memo;
  }, []);
};
