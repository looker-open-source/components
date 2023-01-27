import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { seriesSize } from './seriesSize';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('seriesSize', () => {
  const size_by_field = 'orders.count';
  test('series as array', () => {
    const series = [{
      color: 'blue'
    }, {
      color: 'red',
      size_by: 'orders.average_total_amount_of_order_usd'
    }];
    const transformedConfig = seriesSize({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        size_by_field,
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual([_objectSpread(_objectSpread({}, series[0]), {}, {
      size_by: 'orders.count'
    }), _objectSpread(_objectSpread({}, series[1]), {}, {
      size_by: 'orders.average_total_amount_of_order_usd'
    })]);
  });
  test('series as object', () => {
    const series = {
      'orders.count': {
        color: 'blue'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red',
        size_by: 'orders.average_total_amount_of_order_usd'
      }
    };
    const transformedConfig = seriesSize({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        size_by_field,
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual({
      'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
        size_by: 'orders.count'
      }),
      'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
        size_by: 'orders.average_total_amount_of_order_usd'
      })
    });
  });
  test('Array series: removes invalid size_by keys', () => {
    const series = [{
      size_by: ''
    }, {
      size_by: 'none'
    }];
    const transformedConfig = seriesSize({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual([{
      size_by: false
    }, {
      size_by: false
    }]);
  });
  test('Named series: removes invalid size_by keys', () => {
    const series = {
      'orders.count': {
        size_by: 'none'
      }
    };
    const transformedConfig = seriesSize({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual(expect.objectContaining({
      'orders.count': {
        size_by: false
      }
    }));
  });
});
//# sourceMappingURL=seriesSize.spec.js.map