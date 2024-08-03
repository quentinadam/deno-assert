# assert

[![JSR](https://jsr.io/badges/@quentinadam/assert)](https://jsr.io/@quentinadam/assert)
[![CI](https://github.com/quentinadam/deno-assert/actions/workflows/publish.yml/badge.svg)](https://github.com/quentinadam/deno-assert/actions/workflows/publish.yml)

## Usage

```ts
import assert from '@quentinadam/assert';

assert(true); // doesn't throw

assert(false); // throws an AssertionError

assert(false, 'message'); // throws an AssertionError with a custom error message

assert(false, new Error('message')); // throws a custom Error

const value: string | undefined = 'hello';
assert(value !== undefined); // narrows the type of value to string;
value.toUpperCase(); // works
```
