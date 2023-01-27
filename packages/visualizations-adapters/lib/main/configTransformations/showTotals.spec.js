"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _showTotals4 = require("./showTotals");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('showTotals', function () {
  test('config.show_totals === undefined', function () {
    var config = _objectSpread({}, _fixtures.mockTableConfig);
    var _showTotals = (0, _showTotals4.showTotals)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _showTotals.config;
    expect(transformedConfig.show_totals).toEqual(true);
  });
  test('config.show_totals === true', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockTableConfig), {}, {
      show_totals: true
    });
    var _showTotals2 = (0, _showTotals4.showTotals)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _showTotals2.config;
    expect(transformedConfig.show_totals).toEqual(true);
  });
  test('config.show_totals === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockTableConfig), {}, {
      show_totals: false
    });
    var _showTotals3 = (0, _showTotals4.showTotals)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _showTotals3.config;
    expect(transformedConfig.show_totals).toEqual(false);
  });
});
//# sourceMappingURL=showTotals.spec.js.map