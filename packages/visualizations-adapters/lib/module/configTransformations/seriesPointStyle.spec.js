import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { seriesPointStyle } from './seriesPointStyle';
import { mockLineConfig, mockFields, mockSdkDataResponse } from '../fixtures';
describe('seriesPointStyle', () => {
  test('series as array', () => {
    const series = [{
      color: 'blue',
      style: 'filled'
    }, {
      color: 'red'
    }];
    const transformedConfig = seriesPointStyle({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        point_style: 'none',
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
    });
    expect(transformedConfig.config.series).toEqual([series[0], _objectSpread(_objectSpread({}, series[1]), {}, {
      style: 'none'
    })]);
  });
  test('series as object', () => {
    const series = {
      'orders.count': {
        color: 'blue',
        style: 'filled'
      },
      'orders.average_total_amount_of_order_usd': {
        color: 'red'
      }
    };
    const transformedConfig = seriesPointStyle({
      config: _objectSpread(_objectSpread({}, mockLineConfig), {}, {
        point_style: 'none',
        series
      }),
      data: mockSdkDataResponse,
      fields: mockFields
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