"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pie = exports.NoLegend = exports.MaxDataRender = exports.LegendBottomMaxDataRender = exports.LegendBottom = exports.Labels = exports.ColorOverrides = void 0;
var _react = _interopRequireDefault(require("react"));
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _excluded = ["config", "data", "fields"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var defaultPieData = [{
  'orders.count': 3087,
  'users.state': 'California'
}, {
  'orders.count': 2515,
  'users.state': 'New York'
}, {
  'orders.count': 1234,
  'users.state': 'Oregon'
}];
var defaultPieFields = {
  measures: [{
    is_numeric: true,
    label: 'Orders Count',
    label_short: 'Count',
    name: 'orders.count',
    sortable: true,
    type: 'count_distinct',
    view: 'orders',
    view_label: 'Orders',
    value_format: null
  }],
  dimensions: [{
    is_filter: false,
    is_fiscal: false,
    is_numeric: false,
    is_timeframe: true,
    label: 'Users State',
    label_short: 'State',
    name: 'users.state',
    sortable: true,
    type: 'string',
    view: 'users',
    view_label: 'Users',
    value_format: null
  }],
  pivots: []
};
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/Pie'
};
exports["default"] = _default;
var Template = function Template(_ref) {
  var configProp = _ref.config,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? defaultPieData : _ref$data,
    _ref$fields = _ref.fields,
    fields = _ref$fields === void 0 ? defaultPieFields : _ref$fields,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_Visualization.Visualization, _extends({
    config: (0, _visualizationsAdapters.buildChartConfig)({
      config: _objectSpread({
        type: 'pie'
      }, configProp),
      data: data,
      fields: fields
    }),
    data: data,
    fields: fields
  }, restProps));
};
var Pie = Template.bind({});
exports.Pie = Pie;
Pie.args = {};
var ColorOverrides = Template.bind({});
exports.ColorOverrides = ColorOverrides;
ColorOverrides.args = {
  config: {
    type: 'pie',
    series: [{
      color: '#fa8072'
    }, {
      color: '#74BDCB'
    }]
  }
};
var MaxDataRender = Template.bind({});
exports.MaxDataRender = MaxDataRender;
MaxDataRender.args = {
  data: (0, _visualizationsAdapters.tabularResponse)(_visualizationsAdapters.mockSdkDataResponse),
  fields: _objectSpread(_objectSpread({}, defaultPieFields), {}, {
    dimensions: [_objectSpread(_objectSpread({}, defaultPieFields.dimensions[0]), {}, {
      name: 'orders.created_date'
    })]
  })
};
var LegendBottom = Template.bind({});
exports.LegendBottom = LegendBottom;
LegendBottom.args = {
  config: {
    legend: {
      position: 'bottom',
      value: 'label'
    },
    series: {},
    type: 'pie'
  }
};
var LegendBottomMaxDataRender = Template.bind({});
exports.LegendBottomMaxDataRender = LegendBottomMaxDataRender;
LegendBottomMaxDataRender.args = {
  data: (0, _visualizationsAdapters.tabularResponse)(_visualizationsAdapters.mockSdkDataResponse),
  fields: _objectSpread(_objectSpread({}, defaultPieFields), {}, {
    dimensions: [_objectSpread(_objectSpread({}, defaultPieFields.dimensions[0]), {}, {
      name: 'orders.created_date'
    })]
  }),
  config: {
    legend: {
      position: 'bottom',
      value: 'label_value'
    },
    series: {},
    type: 'pie'
  }
};
var NoLegend = Template.bind({});
exports.NoLegend = NoLegend;
NoLegend.args = {
  config: {
    type: 'pie',
    legend: false,
    series: {}
  }
};
var Labels = Template.bind({});
exports.Labels = Labels;
Labels.args = {
  config: {
    legend: {
      type: 'labels',
      value: 'label_value'
    },
    series: {},
    type: 'pie'
  }
};
//# sourceMappingURL=Pie.stories.js.map