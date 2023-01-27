"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _reactHooks = require("@testing-library/react-hooks");
var _constants = require("../../constants");
var _ = require(".");

describe('useValidationMessage', function () {
  var wrapper = function wrapper(_ref) {
    var children = _ref.children;
    return _react["default"].createElement(_components.ComponentsProvider, null, children);
  };
  describe('Required filter', function () {
    it('should error if required filter is on and there is no value', function () {
      var _renderHook = (0, _reactHooks.renderHook)(function () {
          return (0, _.useValidationMessage)('', true);
        }, {
          wrapper: wrapper
        }),
        current = _renderHook.result.current;
      expect(current).toEqual({
        type: _constants.ERROR_TYPE,
        message: 'Value required'
      });
    });
    it('should not error if required filter is off and there is no value', function () {
      var _renderHook2 = (0, _reactHooks.renderHook)(function () {
          return (0, _.useValidationMessage)('', false);
        }, {
          wrapper: wrapper
        }),
        current = _renderHook2.result.current;
      expect(current).toEqual({});
    });
    it('should not error if required filter is on and there is a value', function () {
      var _renderHook3 = (0, _reactHooks.renderHook)(function () {
          return (0, _.useValidationMessage)('value', true);
        }, {
          wrapper: wrapper
        }),
        current = _renderHook3.result.current;
      expect(current).toEqual({});
    });
  });
});
//# sourceMappingURL=use_validation_message.spec.js.map