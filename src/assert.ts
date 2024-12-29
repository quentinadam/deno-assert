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
 * @param value The value to assert
 * @param error The error to throw if the value is not true.
 *   If not provided, an AssertionError will be thrown.
 *   If a string is provided, it will be used as the error message for the {@linkcode AssertionError}.
 */
export default function assert(value: boolean, error?: Error | string): asserts value {
  if (value !== true) {
    if (error === undefined) {
      error = new AssertionError();
    } else if (typeof error === 'string') {
      error = new AssertionError(error);
    }
    throw error;
  }
}
