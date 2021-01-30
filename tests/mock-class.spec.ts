import { createPersonAndSpeak } from '../src/b';
import { Person } from '../src/a';
import { mocked } from 'ts-jest/utils';

jest.mock('../src/a');

describe('createPersonAndSpeck', () => {
  beforeAll(() => {
    createPersonAndSpeak('name');
  });

  it('should call Person constructor', () => {
    expect(mocked(Person).mock.calls.length).toEqual(1);
  });

  it('should call Person.speak', () => {
    const instance = mocked(Person).mock.instances[0];
    expect(mocked(instance.speak).mock.calls.length).toEqual(1);
  });
});
