import safeGet from './safeGet';

describe('safeGet', () => {
  it('should return the value at keyD', () => {
    const objectToSearch = { a: { b: { c: { d: 'value' } } } };
    const searchString = 'a.b.c.d';
    const value = safeGet(objectToSearch, searchString);

    expect(value).toEqual('value');
  });

  it('should return null for non-existant value', () => {
    const objectToSearch = { a: { b: { c: { d: 'value' } } } };
    const searchString = 'a.b.c.e';
    const value = safeGet(objectToSearch, searchString);

    expect(value).toEqual(null);
  });

  it('should return the error message for non-existant value', () => {
    const objectToSearch = { a: { b: { c: { d: 'value' } } } };
    const searchString = 'a.b.c.e';
    const value = safeGet(objectToSearch, searchString, 'does not exist');

    expect(value).toEqual('does not exist');
  });
});
