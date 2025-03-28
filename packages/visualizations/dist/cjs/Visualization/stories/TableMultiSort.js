"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TableMultiSort;
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _ = require("../");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TableMultiSort() {
  return _react["default"].createElement(_.Visualization, {
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockTableConfig), {}, {
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