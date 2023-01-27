"use strict";

var _escape_parameter_value = require("./escape_parameter_value");

describe('Tier filter values are escaped', function () {
  it('escapes starting dash', function () {
    var result = (0, _escape_parameter_value.escapeParameterValue)('-no label');
    expect(result).toBe('^-no label');
  });
  it('escapes sub_region', function () {
    var result = (0, _escape_parameter_value.escapeParameterValue)('sub_region');
    expect(result).toBe('sub^_region');
  });
});
//# sourceMappingURL=escape_parameter_values.spec.js.map