"use strict";

var _reactHooks = require("@testing-library/react-hooks");

var _this_next_last_units = require("./this_next_last_units");

jest.mock('@looker/i18n', function () {
  return {
    useTranslationBase: function useTranslationBase() {
      return {
        t: function t(str) {
          return str;
        }
      };
    }
  };
});

var testSingular = function testSingular(option) {
  return expect(option.label).toBe(option.singular);
};

describe('date unit options for ThisNextLast component', function () {
  var hooksToTest = {
    useLastUnits: _this_next_last_units.useLastUnits,
    useThisNextUnits: _this_next_last_units.useThisNextUnits,
    useFiscalThisNextUnits: _this_next_last_units.useFiscalThisNextUnits,
    useFiscalLastUnits: _this_next_last_units.useFiscalLastUnits
  };
  Object.keys(hooksToTest).forEach(function (key) {
    it("".concat(key, " matches expected values"), function () {
      var _renderHook = (0, _reactHooks.renderHook)(hooksToTest[key]),
          current = _renderHook.result.current;

      expect(current).toMatchSnapshot();
      current.forEach(testSingular);
    });
  });
  it('this and next component options should not contain day, hour, minute, second', function () {
    var notContains = ['day', 'hour', 'minute', 'second'];

    var _renderHook2 = (0, _reactHooks.renderHook)(_this_next_last_units.useThisNextUnits),
        thisNextUnits = _renderHook2.result.current;

    var _renderHook3 = (0, _reactHooks.renderHook)(_this_next_last_units.useFiscalThisNextUnits),
        fiscalThisNextUnits = _renderHook3.result.current;

    expect(thisNextUnits).not.toContain(notContains);
    expect(fiscalThisNextUnits).not.toContain(notContains);
  });
});
//# sourceMappingURL=this_next_last_units.spec.js.map