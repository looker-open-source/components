"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactHooks = require("@testing-library/react-hooks");

var _relative_timeframe_types = require("../types/relative_timeframe_types");

var _relative_timeframe_to_string = require("./relative_timeframe_to_string");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

jest.mock('@looker/i18n', function () {
  return _objectSpread(_objectSpread({}, jest.requireActual('@looker/i18n')), {}, {
    useTranslationBase: function useTranslationBase() {
      return {
        t: function t(str) {
          return str;
        }
      };
    }
  });
});
describe('Relative Timeframe to String', function () {
  it('should return the preset name for presets', function () {
    var _renderHook = (0, _reactHooks.renderHook)(_relative_timeframe_to_string.useRelativeTimeframeToString, {
      initialProps: _relative_timeframe_types.AllPresetTimeframes.ThisMonth
    }),
        current = _renderHook.result.current;

    expect(current).toEqual('This Month');
  });
  it('should return a formatted range for custom timeframes', function () {
    var _renderHook2 = (0, _reactHooks.renderHook)(_relative_timeframe_to_string.useRelativeTimeframeToString, {
      initialProps: {
        from: new Date(2019, 0, 1),
        to: new Date(2019, 2, 1)
      }
    }),
        current = _renderHook2.result.current;

    expect(current).toEqual('2019/01/01 - 2019/03/01');
  });
});
//# sourceMappingURL=relative_timeframe_to_string.spec.js.map