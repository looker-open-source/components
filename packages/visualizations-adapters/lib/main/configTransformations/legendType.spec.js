"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _legendType6 = require("./legendType");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('legendType', function () {
  describe('config.value_labels ===', function () {
    test('labels', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        value_labels: 'labels',
        legend: undefined
      });
      var _legendType = (0, _legendType6.legendType)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendType.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('labels');
      }
    });
    test('legend', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        value_labels: 'legend',
        legend: undefined
      });
      var _legendType2 = (0, _legendType6.legendType)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendType2.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('legend');
      }
    });
  });
  describe('config.legend.type ===', function () {
    test('labels', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          type: 'labels'
        }
      });
      var _legendType3 = (0, _legendType6.legendType)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendType3.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('labels');
      }
    });
    test('legend', function () {
      var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: {
          type: 'legend'
        }
      });
      var _legendType4 = (0, _legendType6.legendType)({
          config: config,
          data: _fixtures.mockSdkDataResponse,
          fields: _fixtures.mockFields
        }),
        transformedConfig = _legendType4.config;
      if (transformedConfig.legend) {
        expect(transformedConfig.legend.type).toEqual('legend');
      }
    });
  });
  test('config.legend === false', function () {
    var config = _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
      legend: false
    });
    var _legendType5 = (0, _legendType6.legendType)({
        config: config,
        data: _fixtures.mockSdkDataResponse,
        fields: _fixtures.mockFields
      }),
      transformedConfig = _legendType5.config;
    expect(transformedConfig.legend).toEqual(false);
  });
  test('default value', function () {
    expect((0, _legendType6.legendType)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockPieConfig), {}, {
        legend: undefined
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    }).config.legend).toEqual({
      type: 'legend'
    });
  });
});
//# sourceMappingURL=legendType.spec.js.map