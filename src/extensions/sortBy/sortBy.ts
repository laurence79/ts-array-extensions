/**
 * Calls a defined callback function on each element of an array, and
 * returns a new array sorted by the extracted values
 *
 * @param valueExtractFn - A function that accepts up to three arguments.
 *  The sortBy method calls the callback function one time for each
 *  element in the array.
 *
 * @returns A new array, sorted by the result of valueExtractFn.
 */
export const sortBy = <T, V extends string | number | bigint>(
  arr: ReadonlyArray<T>,
  valueExtractFn: (element: T, index: number, array: ReadonlyArray<T>) => V,
  order: 'asc' | 'desc' = 'asc'
): T[] => {
  const multiplier = order === 'asc' ? 1 : -1;

  return [...arr].sort((a, b) => {
    const [valueA, valueB] = [a, b].map(valueExtractFn);

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return (valueA - valueB) * multiplier;
    }

    return String(valueA).localeCompare(String(valueB)) * multiplier;
  });
};
