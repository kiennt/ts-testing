import { createPersonAndSpeak } from '../src/b';
import { foo, Person } from '../src/a';

it('should not mock a.foo', () => {
  expect(jest.isMockFunction(foo)).toEqual(false);
});

it('should not mock Person', () => {
  expect(jest.isMockFunction(Person)).toEqual(false);
});

describe('createPersonAndSpeck', () => {
  const mockedSpeak = jest.fn();
  beforeAll(() => {
    jest.spyOn(Person.prototype, 'speak').mockImplementation(mockedSpeak);
    createPersonAndSpeak('name');
  });

  it('should call Person.speak', () => {
    expect(mockedSpeak.mock.calls.length).toEqual(1);
  });
});
