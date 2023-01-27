"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _seriesValueFormat = require("./seriesValueFormat");
var _fixtures = require("../fixtures");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('seriesValueFormat', function () {
  describe('Series as array', function () {
    var series = [{
      color: '#FA8072',
      label: 'Total Orders'
    }, {
      color: '#70BEFB',
      label: 'Average Order Price'
    }];
    test("Fills in default values when series value_format is not specified", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series
        }),
        fields: _objectSpread(_objectSpread({}, _fixtures.mockFields), {}, {
          measures: [_objectSpread(_objectSpread({}, _fixtures.mockFields.measures[0]), {}, {
            value_format: null
          }), _objectSpread(_objectSpread({}, _fixtures.mockFields.measures[1]), {}, {
            value_format: null
          })]
        }),
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual([{
        color: '#FA8072',
        label: 'Total Orders',
        value_format: '0,0.[00]'
      }, {
        color: '#70BEFB',
        label: 'Average Order Price',
        value_format: '0,0.[00]'
      }]);
    });
    test("Populates value from fields then config.label_value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          label_value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual([{
        color: '#FA8072',
        label: 'Total Orders',
        value_format: '#,##0'
      }, {
        color: '#70BEFB',
        label: 'Average Order Price',
        value_format: '$#,##0.00'
      }]);
    });
    test("Populates value from fields then config.value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual([{
        color: '#FA8072',
        label: 'Total Orders',
        value_format: '#,##0'
      }, {
        color: '#70BEFB',
        label: 'Average Order Price',
        value_format: '$#,##0.00'
      }]);
    });
    test("Preserves user defined config overrides", function () {
      var seriesCopy = [_objectSpread(_objectSpread({}, series[0]), {}, {
        value_format: '$#,##0.00'
      }), _objectSpread(_objectSpread({}, series[1]), {}, {
        value_format: '$#,##0.00'
      })];
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: seriesCopy,
          value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual([{
        color: '#FA8072',
        label: 'Total Orders',
        value_format: '$#,##0.00'
      }, {
        color: '#70BEFB',
        label: 'Average Order Price',
        value_format: '$#,##0.00'
      }]);
    });
    test("Populates value from config.series_value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          series_value_format: {
            'orders.count': {
              format_string: '1'
            },
            'orders.average_total_amount_of_order_usd': {
              format_string: '1'
            }
          }
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual([{
        color: '#FA8072',
        label: 'Total Orders',
        value_format: '1'
      }, {
        color: '#70BEFB',
        label: 'Average Order Price',
        value_format: '1'
      }]);
    });
  });
  describe('Series as object', function () {
    var series = {
      'orders.count': {
        color: '#FA8072',
        label: 'Total Orders'
      },
      'orders.average_total_amount_of_order_usd': {
        color: '#70BEFA',
        label: 'Average Order Price'
      }
    };
    test("Fills in default values when series value_format is not specified", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series
        }),
        fields: _objectSpread(_objectSpread({}, _fixtures.mockFields), {}, {
          measures: [_objectSpread(_objectSpread({}, _fixtures.mockFields.measures[0]), {}, {
            value_format: null
          }), _objectSpread(_objectSpread({}, _fixtures.mockFields.measures[1]), {}, {
            value_format: null
          })]
        }),
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual({
        'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
          value_format: '0,0.[00]'
        }),

        'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
          value_format: '0,0.[00]'
        })
      });
    });
    test("Populates value from fields then config.label_value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          label_value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual({
        'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
          value_format: '#,##0'
        }),
        'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
          value_format: '$#,##0.00'
        })
      });
    });
    test("Populates value from fields then config.value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual({
        'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
          value_format: '#,##0'
        }),
        'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
          value_format: '$#,##0.00'
        })
      });
    });
    test("Preserves user defined config overrides", function () {
      var seriesCopy = {
        'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
          value_format: '$#,##0.00'
        }),
        'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
          value_format: '$#,##0.00'
        })
      };
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: seriesCopy,
          value_format: '#,##0'
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual(seriesCopy);
    });
    test("Populates value from config.series_value_format", function () {
      var transformedConfig = (0, _seriesValueFormat.seriesValueFormat)({
        config: _objectSpread(_objectSpread({}, _fixtures.mockBarConfig), {}, {
          series: series,
          series_value_format: {
            'orders.count': {
              format_string: '1'
            },
            'orders.average_total_amount_of_order_usd': {
              format_string: '1'
            }
          }
        }),
        fields: _fixtures.mockFields,
        data: _fixtures.mockSdkDataResponse
      });
      expect(transformedConfig.config.series).toEqual({
        'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
          value_format: '1'
        }),
        'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
          value_format: '1'
        })
      });
    });
  });
});
//# sourceMappingURL=seriesValueFormat.spec.js.map