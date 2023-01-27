"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _seriesVisible = require("./seriesVisible");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('seriesVisible', function () {
  var hidden_fields = ['orders.count'];
  test('series as array', function () {
    var series = [{
      color: 'blue'
    }, {
      color: 'red',
      visible: false
    }];
    var transformedConfig = (0, _seriesVisible.seriesVisible)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        hidden_fields: hidden_fields,
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });

    expect(transformedConfig.config.series).toEqual([_objectSpread(_objectSpread({}, series[0]), {}, {
      visible: true
    }), series[1]]);
  });
  test('series as object', function () {
    var series = {
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        visible: false
      }
    };
    var transformedConfig = (0, _seriesVisible.seriesVisible)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        hidden_fields: hidden_fields,
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });

    expect(transformedConfig.config.series).toEqual({
      'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
        visible: false
      }),
      'orders.average_total_amount_of_order_usd': _objectSpread({}, series['orders.average_total_amount_of_order_usd'])
    });
  });
  test('scatterplot: hide series referenced in size_by_field by default', function () {
    var series = {
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    var transformedConfig = (0, _seriesVisible.seriesVisible)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        type: 'scatter',
        size_by_field: 'orders.average_total_amount_of_order_usd',
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });

    expect(transformedConfig.config.series).toEqual({
      'orders.count': {
        color: 'blue',
        visible: true
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        visible: false
      }
    });
  });
});
//# sourceMappingURL=seriesVisible.spec.js.map