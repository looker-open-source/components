"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _reactHooks = require("@testing-library/react-hooks");
var _relative_timeframe_types = require("../types/relative_timeframe_types");
var _relative_timeframe_to_string = require("./relative_timeframe_to_string");

describe('Relative Timeframe to String', function () {
  var wrapper = function wrapper(_ref) {
    var children = _ref.children;
    return _react["default"].createElement(_components.ComponentsProvider, null, children);
  };
  it('should return the preset name for presets', function () {
    var _renderHook = (0, _reactHooks.renderHook)(function () {
        return (0, _relative_timeframe_to_string.useRelativeTimeframeToString)(_relative_timeframe_types.AllPresetTimeframes.ThisMonth);
      }, {
        wrapper: wrapper
      }),
      current = _renderHook.result.current;
    expect(current).toEqual('This Month');
  });
  it('should return a formatted range for custom timeframes', function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(function () {
        return (0, _relative_timeframe_to_string.useRelativeTimeframeToString)({
          from: new Date(2019, 0, 1),
          to: new Date(2019, 2, 1)
        });
      }, {
        wrapper: wrapper
      }),
      current = _renderHook2.result.current;
    expect(current).toEqual('2019/01/01 - 2019/03/01');
  });
});
//# sourceMappingURL=relative_timeframe_to_string.spec.js.map