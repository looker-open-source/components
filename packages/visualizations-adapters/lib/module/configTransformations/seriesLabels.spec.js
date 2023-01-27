import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { seriesLabels } from './seriesLabels';
import { mockBarConfig, mockFields, mockSdkDataResponse } from '../fixtures';
test('array series fills in values from series_labels', () => {
  const series = [{
    color: 'blue'
  }, {
    color: 'red',
    visible: false
  }];
  const transformedConfig = seriesLabels({
    config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
      series,
      series_labels: {
        series1: 'C-O-U-N-T',
        series2: 'M-O-N-E-Y'
      }
    }),
    data: mockSdkDataResponse,
    fields: mockFields
  });
  expect(transformedConfig.config.series[0].label).toEqual('C-O-U-N-T');
  expect(transformedConfig.config.series[1].label).toEqual('M-O-N-E-Y');
});
test('array series falls back to field label values', () => {
  const series = [{
    color: 'blue'
  }, {
    color: 'red',
    visible: false
  }];
  const transformedConfig = seriesLabels({
    config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
      series
    }),
    data: mockSdkDataResponse,
    fields: mockFields
  });
  expect(transformedConfig.config.series[0].label).toEqual('Orders Count');
  expect(transformedConfig.config.series[1].label).toEqual('Orders Average Total Amount of Order USD');
});
test('series names pulled from `config.series_labels`', () => {
  const series = {
    'orders.count': {
      color: 'blue'
    },
    'orders.average_total_amount_of_order_usd': {
      color: 'red',
      visible: false
    }
  };
  const series_labels = {
    'orders.count': 'Count',
    'orders.average_total_amount_of_order_usd': 'Average'
  };
  const transformedConfig = seriesLabels({
    config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
      series,
      series_labels
    }),
    data: mockSdkDataResponse,
    fields: mockFields
  });
  expect(transformedConfig.config.series).toEqual({
    'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
      label: series_labels['orders.count']
    }),
    'orders.average_total_amount_of_order_usd': _objectSpread(_objectSpread({}, series['orders.average_total_amount_of_order_usd']), {}, {
      label: series_labels['orders.average_total_amount_of_order_usd']
    })
  });
});
test('series names fall back to fields metadata', () => {
  const series = {
    'orders.count': {
      color: 'blue'
    }
  };
  const transformedConfig = seriesLabels({
    config: _objectSpread(_objectSpread({}, mockBarConfig), {}, {
      series
    }),
    data: mockSdkDataResponse,
    fields: _objectSpread(_objectSpread({}, mockFields), {}, {
      measures: [{
        name: 'orders.count',
        label_short: 'O-R-D-E-R-S'
      }]
    })
  });
  expect(transformedConfig.config.series).toEqual({
    'orders.count': _objectSpread(_objectSpread({}, series['orders.count']), {}, {
      label: 'O-R-D-E-R-S'
    })
  });
});
//# sourceMappingURL=seriesLabels.spec.js.map