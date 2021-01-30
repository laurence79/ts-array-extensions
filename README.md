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

## Functions

- [any](#any)
- [compact](#compact)
- [compactMap](#compactmap)
- [compactMapAsync](#compactmapasync)
- [distinct](#distinct)
- [first](#first)
- [forEachAsync](#foreachasync)
- [groupBy](#groupby)
- [interleave](#interleave)
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

Returns elements of the array that are unique.

```ts
[1, 1, 2, 2].distinct();
// [1, 2]
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

Returns a `Record<K,V[]>` extracted from the array using callbacks

```ts
[
  { make: 'Ford', model: 'Fiesta' },
  { make: 'Ford', model: 'Focus' },
  { make: 'Vauxhall', model: 'Corsa' },
  { make: 'Vauxhall', model: 'Astra' }
].groupBy(
  k => k.make,
  v => v.model
);
// {
//   Ford: ['Fiesta', 'Focus'],
//   Vauxhall: ['Corsa', 'Astra']
// }
```

### interleave

Adds new elements in between each element of an array.

```ts
['one', 'two', 'three'].interleave(() => 'and');
// ['one', 'and', 'two', 'and', 'three']
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

Matches two array using a callback and returns the results joined.

```ts
const left = [1, 2, 3];
const right = [2, 3, 4];

left.outerJoin(right, (l, r) => l === r);
// [
//   { left: 1, right: null },
//   { left: 2, right: 2 },
//   { left: 3, right: 3 },
//   { left: null, right: 4 }
// ]
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

Similar in functionality to [groupBy](#groupBy), but it will use the last value
for a key if there are duplicates.

```ts
[
  { name: 'Chloe', age: 19 },
  { name: 'Daniel', age: 16 },
  { name: 'Polly', age: 12 },
  { name: 'Lottie', age: 10 },
  { name: 'Theodore', age: 8 }
].toRecord(
  k => k.name,
  v => v.age
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

Returns only the values present in both arrays.

```ts
[1, 2, 3].union([2, 3, 4]);
// [2, 3]
```

## Contributing

Contributions welcome!
