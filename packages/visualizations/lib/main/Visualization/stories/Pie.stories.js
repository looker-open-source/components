"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pie = exports.NoLegend = exports.MaxDataRender = exports.LegendBottomMaxDataRender = exports.LegendBottom = exports.Labels = exports.ColorOverrides = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _excluded = ["config", "data", "fields"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_Visualization.Visualization, (0, _extends2["default"])({
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
LegendBottom.parameters = {
  storyshots: {
    disable: true
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
NoLegend.parameters = {
  storyshots: {
    disable: true
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