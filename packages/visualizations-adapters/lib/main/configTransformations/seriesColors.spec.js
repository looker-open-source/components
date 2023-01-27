"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _seriesColors2 = require("./seriesColors");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('seriesColors', function () {
  var series_colors = {
    'orders.count': 'blue',
    'orders.average_total_amount_of_order_usd': 'green'
  };
  test('series as array', function () {
    var series = [{}, {
      color: 'red'
    }];
    var transformedConfig = (0, _seriesColors2.seriesColors)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        series: series,
        series_colors: series_colors
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual([{
      color: 'blue'
    }, series[1]]);
  });
  test('series as object', function () {
    var series = {
      'orders.count': {},
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    var transformedConfig = (0, _seriesColors2.seriesColors)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
        series: series,
        series_colors: series_colors
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual({
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    });
  });
  test('pivoted series', function () {
    var _seriesColors = (0, _seriesColors2.seriesColors)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockLineConfig), {}, {
          series_colors: {
            'Yes - orders.count': 'red',
            'Row Total - orders.count': 'blue'
          },
          series: {
            'Yes - orders.count': {},
            '$$$_row_total_$$$ - orders.count': {}
          }
        }),
        data: _fixtures.mockSdkDataResponse,
        fields: _objectSpread(_objectSpread({}, _fixtures.mockFields), {}, {
          measures: [_objectSpread(_objectSpread({}, _fixtures.mockFields.measures[0]), {}, {
            name: 'Yes - orders.count'
          }), _objectSpread(_objectSpread({}, _fixtures.mockFields.measures[0]), {}, {
            name: '$$$_row_total_$$$ - orders.count'
          })]
        })
      }),
      config = _seriesColors.config;

    expect(config.series).toEqual({
      'Yes - orders.count': {
        color: 'red'
      },
      '$$$_row_total_$$$ - orders.count': {
        color: 'blue'
      }
    });
  });
});
//# sourceMappingURL=seriesColors.spec.js.map