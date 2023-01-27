"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _fixtures = require("../fixtures");
var _seriesCellVis = require("./seriesCellVis");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
describe('seriesCellVis', function () {
  test('series as array', function () {
    var series = [{
      cell_visualization: true,
      color: 'blue'
    }, {
      cell_visualization: false,
      visible: false
    }];
    var transformedConfig = (0, _seriesCellVis.seriesCellVis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockTableConfig), {}, {
        series: series
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual(series);
  });
  test('series as object', function () {
    var series = {
      'orders.count': {
        color: 'blue',
        visible: true
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        label: 'Average',
        visible: false
      }
    };
    var series_cell_visualizations = {
      'orders.count': {
        is_active: true
      },
      'orders.average_total_amount_of_order_usd': {
        is_active: false
      }
    };
    var transformedConfig = (0, _seriesCellVis.seriesCellVis)({
      config: _objectSpread(_objectSpread({}, _fixtures.mockTableConfig), {}, {
        series: series,
        series_cell_visualizations: series_cell_visualizations
      }),
      data: _fixtures.mockSdkDataResponse,
      fields: _fixtures.mockFields
    });
    expect(transformedConfig.config.series).toEqual({
      'orders.count': _objectSpread({
        cell_visualization: true
      }, series['orders.count']),
      'orders.average_total_amount_of_order_usd': _objectSpread({
        cell_visualization: false
      }, series['orders.average_total_amount_of_order_usd'])
    });
  });
});
//# sourceMappingURL=seriesCellVis.spec.js.map