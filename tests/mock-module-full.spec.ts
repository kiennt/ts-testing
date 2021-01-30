import { mocked } from 'ts-jest/utils';
import { bar } from '../src/b';
import * as a from '../src/a';

jest.mock('../src/a');

describe('b', () => {
  describe('hello', () => {
    it('should call a.foo', () => {
      bar();

      const mockedFoo = mocked(a.foo);
      expect(mockedFoo.mock.calls.length).toEqual(1);
    });
  });
});
