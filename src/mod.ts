/**
 * Assertion utilities for runtime value validation.
 *
 * This module provides an {@linkcode assert} function and an {@linkcode AssertionError} class
 * for asserting conditions at runtime.
 *
 * @example
 * ```ts
 * import { assert, AssertionError } from "@quentinadam/assert";
 *
 * assert(1 + 1 === 2); // passes
 *
 * try {
 *   assert(1 + 1 === 3);
 * } catch (e) {
 *   // throws AssertionError
 * }
 *
 * try {
 *   assert(1 + 1 === 3, "Math is broken");
 * } catch (e) {
 *   // throws AssertionError with custom message
 * }
 *
 * try {
 *   assert(1 + 1 === 3, new Error("Math is broken"));
 * } catch (e) {
 *   // throws a custom Error
 * }
 *
 * const value: string | undefined = "hello";
 * assert(value !== undefined); // narrows the type of value to string
 * value.toUpperCase(); // works
 * ```
 *
 * @module
 */

/**
 * An error that is thrown by the {@linkcode assert} function.
 */
export class AssertionError extends Error {
  /**
   * Creates a new AssertionError.
   */
  constructor(message = 'Assertion failed') {
    super(message);
    this.name = 'AssertionError';
  }
}

/**
 * Asserts that a value is true.
 *
 * @param value The value to assert is true.
 * @param error The error to throw if the value is not true.
 *   If not provided, an {@linkcode AssertionError} will be thrown.
 *   If a string is provided, it will be used as the error message for the {@linkcode AssertionError}.
 * @throws {AssertionError} If the value is not true and no custom error is provided.
 */
export function assert(value: boolean, error?: Error | string): asserts value {
  if (value !== true) {
    if (error === undefined) {
      error = new AssertionError();
    } else if (typeof error === 'string') {
      error = new AssertionError(error);
    }
    throw error;
  }
}
