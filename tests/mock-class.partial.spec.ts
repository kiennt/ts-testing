import { createPersonAndSpeak } from '../src/b';
import { foo, Person } from '../src/a';
import { mocked } from 'ts-jest/utils';

const mockedSpeak = jest.fn();
jest.mock('../src/a', () => ({
  ...(jest.requireActual('../src/a') as any),
  Person: jest.fn().mockImplementation(() => ({
    speak: mockedSpeak,
  })),
}));

it('should not mock a.foo', () => {
  expect(jest.isMockFunction(foo)).toEqual(false);
});

describe('createPersonAndSpeck', () => {
  beforeAll(() => {
    createPersonAndSpeak('name');
  });

  it('should call Person constructor', () => {
    expect(mocked(Person).mock.calls.length).toEqual(1);
  });

  it('should call Person.speak', () => {
    expect(mockedSpeak.mock.calls.length).toEqual(1);
  });
});
