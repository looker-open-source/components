import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { seriesColors } from './seriesColors';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('seriesColors', () => {
  const series_colors = {
    'orders.count': 'blue',
    'orders.average_total_amount_of_order_usd': 'green'
  };
  test('series as array', () => {
    const series = [{}, {
      color: 'red'
    }];
    const transformedConfig = seriesColors({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series,
        series_colors
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual([{
      color: 'blue'
    }, series[1]]);
  });
  test('series as object', () => {
    const series = {
      'orders.count': {},
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    const transformedConfig = seriesColors({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series,
        series_colors
      }),
      data: mockSdkDataResponse,
      fields: mockFields
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
  test('pivoted series', () => {
    const {
      config
    } = seriesColors({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series_colors: {
          'Yes - orders.count': 'red',
          'Row Total - orders.count': 'blue'
        },
        series: {
          'Yes - orders.count': {},
          '$$$_row_total_$$$ - orders.count': {}
        }
      }),
      data: mockSdkDataResponse,
      fields: _objectSpread(_objectSpread({}, mockFields), {}, {
        measures: [_objectSpread(_objectSpread({}, mockFields.measures[0]), {}, {
          name: 'Yes - orders.count'
        }), _objectSpread(_objectSpread({}, mockFields.measures[0]), {}, {
          name: '$$$_row_total_$$$ - orders.count'
        })]
      })
    });

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