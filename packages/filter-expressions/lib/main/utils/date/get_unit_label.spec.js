"use strict";

var _i18n = require("../i18n");
var _get_unit_label = require("./get_unit_label");

describe('Returns a label', function () {
  beforeEach(function () {
    return (0, _i18n.i18nInit)()["catch"](function (e) {
      throw new Error(e);
    });
  });
  it('should return a valid plural unit label', function () {
    expect((0, _get_unit_label.getUnitLabel)('week', 3)).toBe('weeks');
  });
  it('should return the unit if value is 1', function () {
    expect((0, _get_unit_label.getUnitLabel)('month', 1)).toBe('month');
  });
  it('should return the unit if unit is not found', function () {
    expect((0, _get_unit_label.getUnitLabel)('something else', 2)).toBe('something else');
  });
});
//# sourceMappingURL=get_unit_label.spec.js.map