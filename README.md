# ts-array-extensions

A library that provides common array transformation functions beyond the built
in ones in js, e.g. `map`, `filter`. See [functions](#available-functions)

Inspired by swift and LINQ.

## Install
Use your package manager of choice, e.g.
```sh
npm i ts-array-extensions
```

## Using

There are three modes for consuming the functions from this library.
- [extending `Array.prototype` using a utility import](#1-extend-the-arrayprototype)  _(simplest - recommended)_.
- [importing the functions directly](#2-importing-the-functions-directly) _(cleanest)_.
- [or using the `pipe()` function](#3-use-pipe-utility-function) _(compromise, one eye on the future)_.

### 1. Extend `Array.prototype`
Add a utility `import` in an entry point file.

```ts
// entry-point.ts
import 'ts-array-extensions/apply';

// some-other-file.ts
[1, 2, 3]
  .compactMap(v => {
    if (v % 2 !== 0) return v;
  })
  .cume(); // [1, 4]
```

Or individual utility `import`s for only the functions that you need. The rest can be shaken out of the tree by a bundler.

```ts
// entry-point.ts
import 'ts-array-extensions/apply/compactMap';
import 'ts-array-extensions/apply/cume';
```

The `import`s are idempotent. Mistaken (or necessary) duplicate imports will have no adverse effects.

### 2. Importing the functions directly

Just `import` the functions directly and use them as you need them.

This is the cleanest approach with no prototype pollution, but readability is sacrificed when wanting to chain multiple functions - or more accurately nest - as it has to be in this mode.

```ts
import { cume, compactMap } from 'ts-array-extensions';

cume(
  compactMap(
    [1, 2, 3],
    v => {
      if (v % 2 !== 0) return v;
    }
  )
); // [1, 4]
```

### 3. Use `pipe()` utility function

Almost as clear as the prototype extension mode, but without the prototype pollution.

```ts
import { pipe, cume, compactMap } from 'ts-array-extensions/pipes';

pipe(
  [1, 2, 3],
  compactMap(v => {
    if (v % 2 !== 0) return v;
  }),
  cume()
) // [1, 4]
```

This is ready for when the [pipeline operator proposal](https://github.com/tc39/proposal-pipeline-operator) lands in typescript

```ts
// DO NOT USE (yet)
// awaiting https://github.com/tc39/proposal-pipeline-operator

import { cume, compactMap } from 'ts-array-extensions/pipes';

[1, 2, 3]
  |> compactMap(v => {
    if (v % 2 !== 0) return v;
  })
  |> cume() // [1, 4]

```

## Available Functions

The following examples use the `Array.prototype` extension mode, but can also be used with the direct import and pipe modes.

- [any](#any)
- [compact](#compact)
- [compactMap](#compactmap)
- [cume](#cume)
- [distinct](#distinct)
- [except](#except)
- [first](#first)
- [groupBy](#groupby)
- [innerJoin](#innerjoin)
- [interleave](#interleave)
- [leftJoin](#leftjoin)
- [max](#max)
- [min](#min)
- [none](#none)
- [outerJoin](#outerjoin)
- [sortBy](#sprtBy)
- [sum](#sum)
- [toRecord](#torecord)
- [union](#union)

### any

Returns `true` if the array contains any elements.

```ts
[1, 2, 3].any(); // true

[].any(); // false
```

### compact

Returns elements of the array that are not `null` or `undefined`.

```ts
[1, null, 2].compact(); // [1, 2]
```

### compactMap

Maps elements and returns results that are not `null` or `undefined`.

```ts
[1, 2, 3].compactMap(v => {
  if (v % 2 !== 0) return v;
}); // [1, 3]
```

### cume

Returns the a running total of all the elements in the array, optionally mapping
them first with a callback

```ts
[1, 10, 100].cume(); // [1, 11, 111]

[1, 10, 100].cume(v => v * 10); // [10, 110, 1110]
```

### distinct

Returns elements of the array that are unique, using a comparer function if
supplied, or `===` if not.

```ts
[1, 1, 2, 2].distinct(); // [1, 2]

[
  { day: 1, month: 1, year: 1979 },
  { day: 1, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 }
].distinct(
  (a, b) => a.day === b.day
    && a.month === b.month
    && a.year === b.year
);
// [
//   { day: 1, month: 1, year: 1979 },
//   { day: 2, month: 1, year: 1979 }
// ]
```

### except

Returns values from the first array, that aren't present in the second, using a
comparer function if supplied, or `===` if not.

```ts
[1, 2, 3].except([2, 3, 4]); // [1]

[
  { day: 1, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 }
].except(
  [
    { day: 2, month: 1, year: 1979 },
    { day: 3, month: 1, year: 1979 }
  ],
  (a, b) => a.day === b.day
    && a.month === b.month
    && a.year === b.year
);
// [
//   { day: 1, month: 1, year: 1979 }
// ]
```

### first

Returns the first element of the array or `null` if empty.

```ts
['morning', 'afternoon'].first(); // 'morning'
```

### groupBy

Returns an array of `Group<K, V>` extracted from the array using a callback, and
an optional key comparer.

```ts
[
  { make: 'Ford', model: 'Fiesta' },
  { make: 'Ford', model: 'Focus' },
  { make: 'Vauxhall', model: 'Corsa' },
  { make: 'Vauxhall', model: 'Astra' }
].groupBy(k => k.make);
// [
//   {
//     key: 'Ford',
//     values: [
//       { make: 'Ford', model: 'Fiesta' },
//       { make: 'Ford', model: 'Focus' }
//     ]
//   },
//   {
//     key: 'Vauxhall',
//     values: [
//       { make: 'Vauxhall', model: 'Corsa' },
//       { make: 'Vauxhall', model: 'Astra' }
//     ]
//   }
// ]
```

### innerJoin

Matches two array using a callback and returns the joined results.

```ts
const leftData = [
  { id: 1, name: 'Apples', groupId: 1 },
  { id: 2, name: 'Oranges', groupId: 1 },
  { id: 3, name: 'Cornflakes', groupId: 2 },
  { id: 4, name: 'Random', groupId: null }
];
const rightData = [
  { id: 1, name: 'Produce' },
  { id: 2, name: 'Grocery' },
  { id: 3, name: 'Confectionary' }
];

leftData.innerJoin(rightData, (l, r) => l.groupId === r.id);
// [
//   {
//     left: { id: 1, name: 'Apples', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 2, name: 'Oranges', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 3, name: 'Cornflakes', groupId: 2 },
//     right: { id: 2, name: 'Grocery' }
//   }
// ];
```

### interleave

Adds new elements in between each element of an array.

```ts
['one', 'two', 'three'].interleave(() => 'and');
// ['one', 'and', 'two', 'and', 'three']
```

### leftJoin

Matches two array using a callback and returns the joined results and unmatched
results from the left array.

```ts
const leftData = [
  { id: 1, name: 'Apples', groupId: 1 },
  { id: 2, name: 'Oranges', groupId: 1 },
  { id: 3, name: 'Cornflakes', groupId: 2 },
  { id: 4, name: 'Random', groupId: null }
];
const rightData = [
  { id: 1, name: 'Produce' },
  { id: 2, name: 'Grocery' },
  { id: 3, name: 'Confectionary' }
];

leftData.leftJoin(rightData, (l, r) => l.groupId === r.id);
// [
//   {
//     left: { id: 1, name: 'Apples', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 2, name: 'Oranges', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 3, name: 'Cornflakes', groupId: 2 },
//     right: { id: 2, name: 'Grocery' }
//   },
//   {
//     left: { id: 4, name: 'Random', groupId: null },
//     right: null
//   }
// ];
```

### max

Returns the highest element in the array

```ts
[-10, 0, 10].max(); // 10

['a', 'b', 'c'].max(); // 'c'

[].max(); // null
```

### min

Returns the lowest element in the array

```ts
[-10, 0, 10].min(); // -10

['a', 'b', 'c'].min(); // 'a'

[].min(); // null
```

### none

Returns `false` if the array contains any elements.

```ts
[1, 2, 3].none(); // false

[].none(); // true
```

### outerJoin

Matches two array using a callback and returns the joined results and unmatched
results from both arrays.

```ts
const leftData = [
  { id: 1, name: 'Apples', groupId: 1 },
  { id: 2, name: 'Oranges', groupId: 1 },
  { id: 3, name: 'Cornflakes', groupId: 2 },
  { id: 4, name: 'Random', groupId: null }
];
const rightData = [
  { id: 1, name: 'Produce' },
  { id: 2, name: 'Grocery' },
  { id: 3, name: 'Confectionary' }
];

leftData.outerJoin(rightData, (l, r) => l.groupId === r.id);
// [
//   {
//     left: { id: 1, name: 'Apples', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 2, name: 'Oranges', groupId: 1 },
//     right: { id: 1, name: 'Produce' }
//   },
//   {
//     left: { id: 3, name: 'Cornflakes', groupId: 2 },
//     right: { id: 2, name: 'Grocery' }
//   },
//   {
//     left: { id: 4, name: 'Random', groupId: null },
//     right: null
//   },
//   {
//     left: null,
//     right: { id: 3, name: 'Confectionary' }
//   }
// ];
```

### sortBy

Returns a new array, sorted by the result of a callback function.

```ts
[
  { name: 'Brian' },
  { name: 'Albert' },
  { name: 'Charlie' }
].sortBy(v => v.name);
// [
//   { name: 'Albert' },
//   { name: 'Brian' },
//   { name: 'Charlie' }
// ]
```

### sum

Returns the total of all the elements in the array, optionally mapping them
first with a callback

```ts
[1, 10, 100].sum(); // 111

[1, 2, 3, 4].sum(v => v % 2); // 2
```

### toRecord

Returns a `Record<K, V>` extracted from the array using callbacks.

Similar in functionality to [groupBy](#groupby), but returns a Record, and the
last value with a matching key wins

```ts
[
  { name: 'Chloe', age: 23 },
  { name: 'Daniel', age: 20 },
  { name: 'Polly', age: 16 },
  { name: 'Lottie', age: 14 },
  { name: 'Theodore', age: 12 },
  { name: 'Hugo', age: 2 }
].toRecord(
  k => k.name,
  v => v.age
);
// {
//   Chloe: 23,
//   Daniel: 20,
//   Polly: 16,
//   Lottie: 14,
//   Theodore: 12,
//   Hugo: 2
// }
```

### union

Returns only the values present in both arrays, using a comparer function if
supplied, or `===` if not.

```ts
[1, 2, 3].union([2, 3, 4]); // [2, 3]

[
  { day: 1, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 }
].union(
  [
    { day: 2, month: 1, year: 1979 },
    { day: 3, month: 1, year: 1979 }
  ],
  (a, b) => a.day === b.day
    && a.month === b.month
    && a.year === b.year
);
// [
//   { day: 2, month: 1, year: 1979 }
// ]
```

## Contributing

Contributions welcome!
