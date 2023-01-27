"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _linePositioning10 = require("./linePositioning");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('linePositioning', function () {
  test('default', function () {
    var config = _objectSpread({}, _fixtures.mockLineConfig);
    delete config.positioning;
    expect((0, _linePositioning10.linePositioning)({
      config: config,
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }).config.positioning).toEqual('overlay');
  });
  describe('config.positioning ===', function () {
    test('grouped', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        positioning: 'overlay'
      });
      var _linePositioning = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning.config;
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('percent', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        positioning: 'percent'
      });
      var _linePositioning2 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning2.config;
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('stacked', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        positioning: 'stacked'
      });
      var _linePositioning3 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning3.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
  });
  describe('config.stacking ===', function () {
    test('grouped', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: 'grouped'
      });
      delete config.positioning;
      var _linePositioning4 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning4.config;
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('stacked', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: 'stacked'
      });
      delete config.positioning;
      var _linePositioning5 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning5.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test('percent', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: 'percent'
      });
      delete config.positioning;
      var _linePositioning6 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning6.config;
      expect(transformedConfig.positioning).toEqual('percent');
    });
    test('overlay', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: 'overlay'
      });
      delete config.positioning;
      var _linePositioning7 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning7.config;
      expect(transformedConfig.positioning).toEqual('overlay');
    });
    test('normal', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: 'normal'
      });
      delete config.positioning;
      var _linePositioning8 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning8.config;
      expect(transformedConfig.positioning).toEqual('stacked');
    });
    test("''", function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        stacking: ''
      });
      delete config.positioning;
      var _linePositioning9 = (0, _linePositioning10.linePositioning)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _linePositioning9.config;
      expect(transformedConfig.positioning).toEqual('overlay');
    });
  });
});
//# sourceMappingURL=linePositioning.spec.js.map