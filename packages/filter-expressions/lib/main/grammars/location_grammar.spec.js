"use strict";

var _utils = require("../utils");

var location = [['36.97, -122.03', '36.97, -122.03'], ['-36.97, 122.03', '-36.97, 122.03'], ['-36.97, -122.03', '-36.97, -122.03'], ['40 miles from -36.97, -122.03', '40 miles from -36.97, -122.03'], ['40 miles from 36.97, -122.03', '40 miles from 36.97, -122.03'], ['100 miles from 36.97, -122.03', '100 miles from 36.97, -122.03'], ['inside box from 72.33, -173.14 to 14.39, -61.70', '72.3°N, 173.1°W to 14.4°N, 61.7°W'], ['', 'is anywhere'], ['NOT NULL', 'is not null'], ['-NULL', 'is not null'], ['NULL', 'is null']];
describe('Location grammar can parse expressions', function () {
  beforeEach(function () {
    return (0, _utils.i18nInit)();
  });
  it.each(location)('%s', function (expression, result) {
    expect((0, _utils.parseFilterExpression)('location', expression)).toMatchSnapshot();
    expect((0, _utils.summary)({
      type: 'location',
      expression: expression
    })).toBe(result);
  });
});
//# sourceMappingURL=location_grammar.spec.js.map