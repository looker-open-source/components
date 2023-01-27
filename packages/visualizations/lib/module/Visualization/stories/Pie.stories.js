import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["config", "data", "fields"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
LegendBottom.parameters = {
  storyshots: {
    disable: true
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
NoLegend.parameters = {
  storyshots: {
    disable: true
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