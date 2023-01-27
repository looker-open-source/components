"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _seriesPointStyle = require("./seriesPointStyle");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('seriesPointStyle', function () {
  test('series as array', function () {
    var series = [{
      color: 'blue',
      style: 'filled'
    }, {
      color: 'red'
    }];
    var transformedConfig = (0, _seriesPointStyle.seriesPointStyle)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        point_style: 'none',
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual([series[0], _objectSpread(_objectSpread({}, series[1]), {}, {
      style: 'none'
    })]);
  });
  test('series as object', function () {
    var series = {
      'orders.count': {
        color: 'blue',
        style: 'filled'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    var transformedConfig = (0, _seriesPointStyle.seriesPointStyle)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        point_style: 'none',
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual({
      'orders.count': series['orders.count'],
      'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
        style: 'none'
      })
    });
  });
});
//# sourceMappingURL=seriesPointStyle.spec.js.map