import * as a from '../src/a';

jest.spyOn(a, 'foo');

describe('jest spyOn', () => {
  it('should mock a.foo', () => {
    expect(jest.isMockFunction(a.foo)).toEqual(true);
  });

  it('should not mock a.bar', () => {
    expect(jest.isMockFunction(a.bar)).toEqual(false);
  });
});
