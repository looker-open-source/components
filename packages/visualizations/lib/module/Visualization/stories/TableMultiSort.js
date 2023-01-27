import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import React from 'react';
import { mockTableConfig } from '@looker/visualizations-adapters';
import { Visualization } from '../';
export default function TableMultiSort() {
  return React.createElement(Visualization, {
    config: _objectSpread(_objectSpread({}, mockTableConfig), {}, {
      series: [{
        cell_visualization: true
      }]
    }),
    data: [{
      'order.year': '2012',
      'user.state': 'Oregon',
      'order.count': 200
    }, {
      'order.year': '2013',
      'user.state': 'Oregon',
      'order.count': 300
    }, {
      'order.year': '2014',
      'user.state': 'Oregon',
      'order.count': 150
    }, {
      'order.year': '2012',
      'user.state': 'California',
      'order.count': 400
    }, {
      'order.year': '2013',
      'user.state': 'California',
      'order.count': 250
    }, {
      'order.year': '2014',
      'user.state': 'California',
      'order.count': 600
    }, {
      'order.year': '2012',
      'user.state': 'Washington',
      'order.count': 99
    }, {
      'order.year': '2013',
      'user.state': 'Washington',
      'order.count': 500
    }, {
      'order.year': '2014',
      'user.state': 'Washington',
      'order.count': 250
    }],
    fields: {
      measures: [{
        is_numeric: true,
        label: 'Order count',
        label_short: 'Orders',
        name: 'order.count',
        sortable: true,
        sorted: {
          desc: false,
          sort_index: 1
        },
        type: 'count_distinct',
        view: 'order',
        view_label: 'Orders',
        value_format: null
      }],
      dimensions: [{
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'Order Year',
        label_short: 'Year',
        name: 'order.year',
        sortable: true,
        sorted: {
          desc: false,
          sort_index: 0
        },
        type: 'string',
        view: 'order',
        view_label: 'Order',
        value_format: null
      }, {
        is_filter: false,
        is_fiscal: false,
        is_numeric: false,
        is_timeframe: true,
        label: 'User State',
        label_short: 'State',
        name: 'user.state',
        sortable: true,
        sorted: {
          desc: true,
          sort_index: 2
        },
        type: 'string',
        view: 'user',
        view_label: 'User',
        value_format: null
      }],
      pivots: []
    }
  });
}
//# sourceMappingURL=TableMultiSort.js.map