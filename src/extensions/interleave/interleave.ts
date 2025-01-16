/**
 * Calls a defined callback function on each pair of consecutive elements of
 * an array, and returns an array with the result of the callback function
 * inserted between the elements with which it was called.
 *
 * @param callback - A function that accepts two arguments. The
 *  interleave method calls the callback function one time for each
 *  pair of consecutive element in the array.
 *
 * @returns A new array with additional elements inserted between each
 *  element.
 */
export const interleave = <T, U>(
  arr: readonly T[],
  callback: (previousElement: T, nextElement: T) => U
): Array<T | U> => {
  const r: Array<T | U> = [];
  for (let index = 0; index < arr.length; index += 1) {
    r.push(arr[index]);
    if (index !== arr.length - 1) {
      r.push(callback(arr[index], arr[index + 1]));
    }
  }
  return r;
};
