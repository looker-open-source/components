const _excluded = ["config", "data", "fields"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React from 'react';
import { Visualization } from '../Visualization';
import { mockSdkDataResponse, tabularResponse, buildChartConfig } from '@looker/visualizations-adapters';
const defaultPieData = [{
  'orders.count': 3087,
  'users.state': 'California'
}, {
  'orders.count': 2515,
  'users.state': 'New York'
}, {
  'orders.count': 1234,
  'users.state': 'Oregon'
}];
const defaultPieFields = {
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
export default {
  component: Visualization,
  title: 'Visualizations/Stories/Pie'
};
const Template = _ref => {
  let {
      config: configProp,
      data = defaultPieData,
      fields = defaultPieFields
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return React.createElement(Visualization, _extends({
    config: buildChartConfig({
      config: _objectSpread({
        type: 'pie'
      }, configProp),
      data,
      fields
    }),
    data: data,
    fields: fields
  }, restProps));
};
export const Pie = Template.bind({});
Pie.args = {};
export const ColorOverrides = Template.bind({});
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
export const MaxDataRender = Template.bind({});
MaxDataRender.args = {
  data: tabularResponse(mockSdkDataResponse),
  fields: _objectSpread(_objectSpread({}, defaultPieFields), {}, {
    dimensions: [_objectSpread(_objectSpread({}, defaultPieFields.dimensions[0]), {}, {
      name: 'orders.created_date'
    })]
  })
};
export const LegendBottom = Template.bind({});
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
export const LegendBottomMaxDataRender = Template.bind({});
LegendBottomMaxDataRender.args = {
  data: tabularResponse(mockSdkDataResponse),
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
export const NoLegend = Template.bind({});
NoLegend.args = {
  config: {
    type: 'pie',
    legend: false,
    series: {}
  }
};
export const Labels = Template.bind({});
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