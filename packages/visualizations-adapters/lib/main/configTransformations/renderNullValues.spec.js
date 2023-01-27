"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _renderNullValues4 = require("./renderNullValues");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('renderNullValues', function () {
  test('default', function () {
    var config = _objectSpread({}, _fixtures.mockLineConfig);
    var _renderNullValues = (0, _renderNullValues4.renderNullValues)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _renderNullValues.config;
    expect(transformedConfig.render_null_values).toEqual(false);
  });
  test('config.render_null_values === true', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      render_null_values: true
    });
    var _renderNullValues2 = (0, _renderNullValues4.renderNullValues)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _renderNullValues2.config;
    expect(transformedConfig.render_null_values).toEqual(true);
  });
  test('config.render_null_values === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
      render_null_values: false
    });
    var _renderNullValues3 = (0, _renderNullValues4.renderNullValues)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _renderNullValues3.config;
    expect(transformedConfig.render_null_values).toEqual(false);
  });
});
//# sourceMappingURL=renderNullValues.spec.js.map