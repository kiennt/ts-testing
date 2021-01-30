import { foo, Person } from './a';

export function bar(): void {
  foo();
}

export function createPersonAndSpeak(name: string): Person {
  const person = new Person(name);
  person.speak();
  return person;
}
