"use strict";

var _option_utils = require("./option_utils");

var options = [{
  label: 'Foo',
  value: '0'
}, {
  label: 'Bar',
  value: '1'
}, {
  label: 'Baz',
  value: '2'
}];
describe('filterOptions', function () {
  describe('when filterTerm is empty', function () {
    it('returns all options with no excludedValues', function () {
      var resultOptions = (0, _option_utils.filterOptions)(options, '');
      expect(resultOptions).toEqual(options);
    });
    it('returns all options with no empty excludedValues', function () {
      var resultOptions2 = (0, _option_utils.filterOptions)(options, '', []);
      expect(resultOptions2).toEqual(options);
    });
    it('returns all options with no matches in excludedValues', function () {
      var resultOptions3 = (0, _option_utils.filterOptions)(options, '', ['18']);
      expect(resultOptions3).toEqual(options);
    });
  });
  it('returns options where the label matches the term anywhere, case-insensitive', function () {
    var resultOptions = (0, _option_utils.filterOptions)(options, 'oo');
    expect(resultOptions).toEqual([options[0]]);
    var resultOptions2 = (0, _option_utils.filterOptions)(options, 'ba');
    expect(resultOptions2).toEqual([options[1], options[2]]);
  });
  it('returns options where the value is not in excludedValues', function () {
    var resultOptions = (0, _option_utils.filterOptions)(options, '', ['0']);
    expect(resultOptions).toEqual([options[1], options[2]]);
    var resultOptions2 = (0, _option_utils.filterOptions)(options, 'ba', ['1']);
    expect(resultOptions2).toEqual([options[2]]);
  });
});
//# sourceMappingURL=option_utils.spec.js.map