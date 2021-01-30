export function foo(): void {
  // do something
}

export function bar(): void {
  foo();
}

export class Person extends Object {
  constructor(readonly name: string) {
    super();
  }

  walk(): void {
    // do something
  }

  speak(): void {
    // do something
  }
}
