"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _barPositioning10 = require("./barPositioning");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('barPositioning', function () {
  test('default', function () {
    var config = _objectSpread({}, _fixtures.mockBarConfig);
    delete config.positioning;
    expect((0, _barPositioning10.barPositioning)({
      config: config,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }).config.positioning).toEqual('grouped');
  });
  describe('config.positioning ===', function () {
    test('grouped', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        positioning: 'grouped'
      });
      var _barPositioning = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning.config;
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('percent', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        positioning: 'percent'
      });
      var _barPositioning2 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning2.config;
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('stacked', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        positioning: 'stacked'
      });
      var _barPositioning3 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning3.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
  });
  describe('config.stacking ===', function () {
    test('grouped', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: 'grouped'
      });
      delete config.positioning;
      var _barPositioning4 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning4.config;
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('stacked', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: 'stacked'
      });
      delete config.positioning;
      var _barPositioning5 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning5.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test('percent', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: 'percent'
      });
      delete config.positioning;
      var _barPositioning6 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning6.config;
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('overlay', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: 'overlay'
      });
      delete config.positioning;
      var _barPositioning7 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning7.config;
      expect(transformedConfig.positioning).toEqual('grouped');
    });
    test('normal', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: 'normal'
      });
      delete config.positioning;
      var _barPositioning8 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning8.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test("''", function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        stacking: ''
      });
      delete config.positioning;
      var _barPositioning9 = (0, _barPositioning10.barPositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _barPositioning9.config;
      expect(transformedConfig.positioning).toEqual('grouped');
    });
  });
});
//# sourceMappingURL=barPositioning.spec.js.map