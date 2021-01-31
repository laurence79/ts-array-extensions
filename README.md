# Typescript Array Extensions

A library that adds common array higher order function support beyond the built
in functions in js, e.g. `map`, `filter`, by extending the `Array` prototype.

Inspired by swift and LINQ.

## Installing

```sh
npm i ts-array-extensions
```

## Using

You can `import` all the functions

```ts
import 'ts-array-extensions';
```

or individual ones as you need them

```ts
import 'ts-array-extensions/compactMap';
```

## Array.prototype extensions

- [any](#any)
- [compact](#compact)
- [compactMap](#compactmap)
- [compactMapAsync](#compactmapasync)
- [distinct](#distinct)
- [first](#first)
- [forEachAsync](#foreachasync)
- [groupBy](#groupby)
- [innerJoin](#innerjoin)
- [interleave](#interleave)
- [leftJoin](#leftjoin)
- [mapAsync](#mapasync)
- [max](#max)
- [min](#min)
- [none](#none)
- [outerJoin](#outerjoin)
- [sum](#sum)
- [toRecord](#torecord)
- [union](#union)

### any

Returns `true` if the array contains any elements.

```ts
[1, 2, 3].any();
// true

[].any();
// false
```

### compact

Returns elements of the array that are not `null` or `undefined`.

```ts
[1, null, 2].compact();
// [1, 2]
```

### compactMap

Maps elements and returns results that are not `null` or `undefined`.

```ts
[1, 2, 3].compactMap(v => {
  if (v % 2 !== 0) return v;
});
// [1, 3]
```

### compactMapAsync

Same as [compactMap](#compactMap) but works with promises. Will await `async` callbacks.

```ts
await [1, 2, 3].compactMapAsync(async v => {
  await /* something */
  return v;
});
// [1, 2, 3]
```

### distinct

Returns elements of the array that are unique, using a comparer function if
supplied, or `===` if not.

```ts
[1, 1, 2, 2].distinct();
// [1, 2]

[
  { day: 1, month: 1, year: 1979 },
  { day: 1, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 }
].distinct(
  (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
);
// [
//   { day: 1, month: 1, year: 1979 },
//   { day: 2, month: 1, year: 1979 }
// ]
```

### first

Returns the first element of the array or `null` if empty.

```ts
['morning', 'afternoon'].first();
// 'morning'
```

### forEachAsync

Same as [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) but works with promises. Will await `async`
callbacks.

```ts
await [1, 2, 3].forEachAsync(async v => {
  await /* something */
});
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

### mapAsync

Same as [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) but works with promises. Will await `async`
callbacks.

```ts
await [1, 2, 3].map(async v => {
  await /* something */
  return v * 2;
});
// [2, 4, 6]
```

### max

Returns the highest element in the array

```ts
[-10, 0, 10].max();
// 10

['a', 'b', 'c'].max();
// 'c'

[].max();
// null
```

### min

Returns the lowest element in the array

```ts
[-10, 0, 10].min();
// -10

['a', 'b', 'c'].min();
// 'a'

[].min();
// null
```

### none

Returns `false` if the array contains any elements.

```ts
[1, 2, 3].none();
// false

[].none();
// true
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

### sum

Returns the total of all the elements in the array, optionally mapping them
first with a callback

```ts
[1, 10, 100].sum();
// 111

[1, 2, 3, 4].sum(v => v % 2);
// 2
```

### toRecord

Returns a `Record<K,V>` extracted from the array using callbacks.

Similar in functionality to [groupBy](#groupby), but returns a Record, and can
optionally aggregate values with the same key.

```ts
[
  { name: 'Chloe', age: 19 },
  { name: 'Daniel', age: 16 },
  { name: 'Polly', age: 12 },
  { name: 'Lottie', age: 10 },
  { name: 'Theodore', age: 8 }
].toRecord(
  k => k.name,
  v => v.first().age
);
// {
//   Chloe: 19,
//   Daniel: 16,
//   Polly: 12,
//   Lottie: 10,
//   Theodore: 8
// }
```

### union

Returns only the values present in both arrays, using a comparer function if
supplied, or `===` if not.

```ts
[1, 2, 3].union([2, 3, 4]);
// [2, 3]

[
  { day: 1, month: 1, year: 1979 },
  { day: 2, month: 1, year: 1979 }
].union(
  [
    { day: 2, month: 1, year: 1979 },
    { day: 3, month: 1, year: 1979 }
  ],
  (a, b) => a.day === b.day && a.month === b.month && a.year === b.year
);
// [
//   { day: 2, month: 1, year: 1979 }
// ]
```

## Contributing

Contributions welcome!
