import * as a from '../src/a';

jest.mock('../src/a', () => ({
  ...(jest.requireActual('../src/a') as any),
  foo: jest.fn(),
}));

describe('mock-module-paritial', () => {
  it('should mock a.foo', () => {
    expect(jest.isMockFunction(a.foo)).toEqual(true);
  });

  it('should not mock a.bar', () => {
    expect(jest.isMockFunction(a.bar)).toEqual(false);
  });
});
