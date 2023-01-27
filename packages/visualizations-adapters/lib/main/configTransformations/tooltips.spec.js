"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _tooltips4 = require("./tooltips");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('tooltips', function () {
  test('config.tooltips === undefined', function () {
    var config = _objectSpread({}, _fixtures.mockLineConfig);
    var _tooltips = (0, _tooltips4.tooltips)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _tooltips.config;
    expect(transformedConfig.tooltips).toEqual(true);
  });
  test('config.tooltips === true', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      tooltips: true
    });
    var _tooltips2 = (0, _tooltips4.tooltips)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _tooltips2.config;
    expect(transformedConfig.tooltips).toEqual(true);
  });
  test('config.tooltips === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      tooltips: false
    });
    var _tooltips3 = (0, _tooltips4.tooltips)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _tooltips3.config;
    expect(transformedConfig.tooltips).toEqual(false);
  });
});
//# sourceMappingURL=tooltips.spec.js.map