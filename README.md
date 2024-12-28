# @quentinadam/assert

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple assertion function.

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

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-assert/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-assert/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/assert.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/assert
[jsr-image]: https://jsr.io/badges/@quentinadam/assert?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/assert
