import { filterOptions } from './option_utils';
const options = [{
  label: 'Foo',
  value: '0'
}, {
  label: 'Bar',
  value: '1'
}, {
  label: 'Baz',
  value: '2'
}];
describe('filterOptions', () => {
  describe('when filterTerm is empty', () => {
    it('returns all options with no excludedValues', () => {
      const resultOptions = filterOptions(options, '');
      expect(resultOptions).toEqual(options);
    });
    it('returns all options with no empty excludedValues', () => {
      const resultOptions2 = filterOptions(options, '', []);
      expect(resultOptions2).toEqual(options);
    });
    it('returns all options with no matches in excludedValues', () => {
      const resultOptions3 = filterOptions(options, '', ['18']);
      expect(resultOptions3).toEqual(options);
    });
  });
  it('returns options where the label matches the term anywhere, case-insensitive', () => {
    const resultOptions = filterOptions(options, 'oo');
    expect(resultOptions).toEqual([options[0]]);
    const resultOptions2 = filterOptions(options, 'ba');
    expect(resultOptions2).toEqual([options[1], options[2]]);
  });
  it('returns options where the value is not in excludedValues', () => {
    const resultOptions = filterOptions(options, '', ['0']);
    expect(resultOptions).toEqual([options[1], options[2]]);
    const resultOptions2 = filterOptions(options, 'ba', ['1']);
    expect(resultOptions2).toEqual([options[2]]);
  });
});
//# sourceMappingURL=option_utils.spec.js.map