"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _legendPosition12 = require("./legendPosition");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('legendPosition', function () {
  describe('config.hide_legend ===', function () {
    test('true', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        hide_legend: true
      });
      var _legendPosition = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition.config;
      expect(transformedConfig.legend).toEqual(false);
    });
    test('false', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        hide_legend: false
      });
      var _legendPosition2 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition2.config;
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
  });
  describe('config.legend_position ===', function () {
    test('bottom', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'bottom'
      });
      var _legendPosition3 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition3.config;
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('center', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'center'
      });
      var _legendPosition4 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition4.config;
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('left', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'left'
      });
      var _legendPosition5 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition5.config;
      expect(transformedConfig.legend).toEqual({
        position: 'left'
      });
    });
    test('right', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'right'
      });
      var _legendPosition6 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition6.config;
      expect(transformedConfig.legend).toEqual({
        position: 'right'
      });
    });
    test('top', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: undefined,
        legend_position: 'top'
      });
      var _legendPosition7 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition7.config;
      expect(transformedConfig.legend).toEqual({
        position: 'top'
      });
    });
  });
  describe('config.legend.position ===', function () {
    test('bottom', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: {
          position: 'bottom'
        }
      });
      var _legendPosition8 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition8.config;
      expect(transformedConfig.legend).toEqual({
        position: 'bottom'
      });
    });
    test('left', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: {
          position: 'left'
        }
      });
      var _legendPosition9 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition9.config;
      expect(transformedConfig.legend).toEqual({
        position: 'left'
      });
    });
    test('right', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: {
          position: 'right'
        }
      });
      var _legendPosition10 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition10.config;
      expect(transformedConfig.legend).toEqual({
        position: 'right'
      });
    });
    test('top', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
        legend: {
          position: 'top'
        }
      });
      var _legendPosition11 = (0, _legendPosition12.legendPosition)({
          config: config,
          fields: _fixtures.mockFields,
          data: _fixtures.mockSdkDataResponse
        }),
        transformedConfig = _legendPosition11.config;
      expect(transformedConfig.legend).toEqual({
        position: 'top'
      });
    });
  });
});
//# sourceMappingURL=legendPosition.spec.js.map