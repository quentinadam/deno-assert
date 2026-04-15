# @quentinadam/assert

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple assertion function.

## Usage

```ts
import { assert, AssertionError } from '@quentinadam/assert';

assert(1 + 1 === 2); // passes

try {
  assert(1 + 1 === 3);
} catch (e) {
  // throws AssertionError
}

try {
  assert(1 + 1 === 3, 'Math is broken');
} catch (e) {
  // throws AssertionError with custom message
}

try {
  assert(1 + 1 === 3, new Error('Math is broken'));
} catch (e) {
  // throws a custom Error
}

const value: string | undefined = 'hello';
assert(value !== undefined); // narrows the type of value to string
value.toUpperCase(); // works
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-assert/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-assert/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/assert.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/assert
[jsr-image]: https://jsr.io/badges/@quentinadam/assert?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/assert
