import { foo, Person } from '../src/a';

it('should not mock a.foo', () => {
  expect(jest.isMockFunction(foo)).toEqual(false);
});

it('should not mock Person', () => {
  expect(jest.isMockFunction(Person)).toEqual(false);
});

describe('createPersonAndSpeck', () => {
  let person;
  const mockedSpeak = jest.fn();
  beforeAll(() => {
    person = new Person('hello');
    jest.spyOn(person, 'speak').mockImplementation(mockedSpeak);
    person.speak();
  });

  it('should call Person.speak', () => {
    expect(mockedSpeak.mock.calls.length).toEqual(1);
  });
});
