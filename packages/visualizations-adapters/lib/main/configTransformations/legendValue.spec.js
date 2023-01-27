"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _legendValue13 = require("./legendValue");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('legendValue', function () {
  test('default value', function () {
    var _legendValue = (0, _legendValue13.legendValue)({
        config: _objectSpread({}, _fixtures.mockPieConfig),
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      config = _legendValue.config;
    expect(config.legend).toEqual({
      position: 'bottom',
      type: 'legend',
      value: 'label'
    });
  });
  describe('config.label_type ===', function () {
    test('lab', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        label_type: 'lab',
        legend: undefined
      });
      var _legendValue2 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue2.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label');
      }
    });
    test('labVal', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        label_type: 'labVal',
        legend: undefined
      });
      var _legendValue3 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue3.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value');
      }
    });
    test('val', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        label_type: 'val',
        legend: undefined
      });
      var _legendValue4 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue4.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value');
      }
    });
    test('per', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        label_type: 'per',
        legend: undefined
      });
      var _legendValue5 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue5.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent');
      }
    });
    test('labPer', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        label_type: 'labPer',
        legend: undefined
      });
      var _legendValue6 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue6.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent');
      }
    });
  });
  describe('config.legend.value ===', function () {
    test('"label"', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          value: 'label'
        }
      });
      var _legendValue7 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue7.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label');
      }
    });
    test('"value"', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          value: 'value'
        }
      });
      var _legendValue8 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue8.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('value');
      }
    });
    test('"percent"', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          value: 'percent'
        }
      });
      var _legendValue9 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue9.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('percent');
      }
    });
    test('"label_value"', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          value: 'label_value'
        }
      });
      var _legendValue10 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue10.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_value');
      }
    });
    test('"label_percent"', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          value: 'label_percent'
        }
      });
      var _legendValue11 = (0, _legendValue13.legendValue)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendValue11.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.value).toEqual('label_percent');
      }
    });
  });
  test('config.legend === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
      legend: false
    });
    var _legendValue12 = (0, _legendValue13.legendValue)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _legendValue12.config;
    expect(transformedConfig.legend).toEqual(false);
  });
});
//# sourceMappingURL=legendValue.spec.js.map