export type Callback<T, U> = (
  element: T,
  index: number,
  collection: ReadonlyArray<T>
) => U;
