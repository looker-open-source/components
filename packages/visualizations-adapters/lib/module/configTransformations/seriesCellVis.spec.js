import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { mockTableConfig, mockFields, mockSdkDataResponse } from '../fixtures';
import { seriesCellVis } from './seriesCellVis';
describe('seriesCellVis', () => {
  test('series as array', () => {
    const series = [{
      cell_visualization: true,
      color: 'blue'
    }, {
      cell_visualization: false,
      visible: false
    }];
    const transformedConfig = seriesCellVis({
      config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual(series);
  });
  test('series as object', () => {
    const series = {
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
    const series_cell_visualizations = {
      'orders.count': {
        is_active: true
      },
      'orders.average_total_amount_of_order_usd': {
        is_active: false
      }
    };
    const transformedConfig = seriesCellVis({
      config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
        series,
        series_cell_visualizations
      }),
      data: mockSdkDataResponse,
      fields: mockFields
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