export class AssertionError extends Error {
  constructor(message = 'Assertion failed') {
    super(message);
    this.name = 'AssertionError';
  }
}

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
