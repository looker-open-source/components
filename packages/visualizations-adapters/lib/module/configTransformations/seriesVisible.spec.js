import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { seriesVisible } from './seriesVisible';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('seriesVisible', () => {
  const hidden_fields = ['orders.count'];
  test('series as array', () => {
    const series = [{
      color: 'blue'
    }, {
      color: 'red',
      visible: false
    }];
    const transformedConfig = seriesVisible({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        hidden_fields,
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });

    expect(transformedConfig.config.series).toEqual([_objectSpread(_objectSpread({}, series[0]), {}, {
      visible: true
    }), series[1]]);
  });
  test('series as object', () => {
    const series = {
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        visible: false
      }
    };
    const transformedConfig = seriesVisible({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        hidden_fields,
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });

    expect(transformedConfig.config.series).toEqual({
      'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
        visible: false
      }),
      'orders.average_total_amount_of_order_usd': _objectSpread({}, series['orders.average_total_amount_of_order_usd'])
    });
  });
  test('scatterplot: hide series referenced in size_by_field by default', () => {
    const series = {
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    const transformedConfig = seriesVisible({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        type: 'scatter',
        size_by_field: 'orders.average_total_amount_of_order_usd',
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
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