"use strict";

var _number_filter_type_to_filter = require("./number_filter_type_to_filter");

describe('number filter options', function () {
  it('should use multi input filter if allowMultipleValues is true', function () {
    expect((0, _number_filter_type_to_filter.numberFilterTypeToFilter)('=', true).displayName).toBe('MultiInput');
  });
  it('should use single input filter if allowMultipleValues is false', function () {
    expect((0, _number_filter_type_to_filter.numberFilterTypeToFilter)('=', false).name).toBe('SingleNumberInput');
  });
});
//# sourceMappingURL=number_filter_type_to_filter.spec.js.map