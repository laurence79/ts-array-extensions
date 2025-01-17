function pipe<A, B>(a: A, b: (a: A) => B): B;
function pipe<A, B, C>(a: A, b: (a: A) => B, c: (b: B) => C): C;
function pipe<A, B, C, D>(
  a: A,
  b: (a: A) => B,
  c: (b: B) => C,
  d: (c: C) => D
): D;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pipe(...args: any[]) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return args.reduce((prev, current) => current(prev));
}

export { pipe };
