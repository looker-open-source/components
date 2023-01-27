"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PointStyleNone = exports.PointStyleFilled = exports.Pivot = exports.Line = exports.DefaultYAxisSingleMeasure = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _excluded = ["config"],
  _excluded2 = ["orders.average_total_amount_of_order_usd"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/Line'
};
exports["default"] = _default;
var Template = function Template(_ref) {
  var configProp = _ref.config,
    restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var data = (0, _visualizationsAdapters.tabularResponse)((0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkDataResponse));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), configProp), {}, {
      type: 'line'
    }),
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse
  });
  return _react["default"].createElement(_Visualization.Visualization, (0, _extends2["default"])({
    config: config,
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse,
    height: 600,
    width: 800
  }, restProps));
};
var Line = Template.bind({});
exports.Line = Line;
Line.args = {
  config: {
    series: [{
      visible: true
    }, {
      visible: true
    }]
  }
};
var PointStyleFilled = Template.bind({});
exports.PointStyleFilled = PointStyleFilled;
PointStyleFilled.args = {
  config: {
    series: [{
      style: 'filled'
    }, {
      style: 'filled'
    }]
  }
};
var PointStyleNone = Template.bind({});
exports.PointStyleNone = PointStyleNone;
PointStyleNone.args = {
  config: {
    series: [{
      style: 'none'
    }, {
      style: 'none'
    }]
  }
};
var Pivot = function Pivot() {
  var mockPivotFields = (0, _visualizationsAdapters.buildPivotFields)({
    fields: _objectSpread({}, _visualizationsAdapters.mockSdkFieldsResponse),
    pivots: _visualizationsAdapters.mockPivots
  });
  var mockPivotData = (0, _visualizationsAdapters.tabularPivotResponse)({
    data: (0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkPivotDataResponse),
    fields: _objectSpread({}, _visualizationsAdapters.mockSdkFieldsResponse),
    pivots: _visualizationsAdapters.mockPivots
  });
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockLineConfig), {}, {
      type: 'area'
    }),
    data: mockPivotData,
    fields: mockPivotFields
  });
  return _react["default"].createElement(_Visualization.Visualization, {
    config: config,
    data: mockPivotData,
    fields: mockPivotFields,
    height: 600,
    width: 800
  });
};
exports.Pivot = Pivot;
Pivot.parameters = {
  storyshots: {
    disable: true
  }
};
var DefaultYAxisSingleMeasure = function DefaultYAxisSingleMeasure() {
  var fields = _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkFieldsResponse), {}, {
    measures: _visualizationsAdapters.mockSdkFieldsResponse.measures.slice(0, 1)
  });

  var data = (0, _visualizationsAdapters.tabularResponse)((0, _toConsumableArray2["default"])(_visualizationsAdapters.mockSdkDataResponse).map(function (datum) {
    var _ordersAverageEtc = datum['orders.average_total_amount_of_order_usd'],
      rest = (0, _objectWithoutProperties2["default"])(datum, _excluded2);
    return rest;
  }));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), {}, {
      y_axes: undefined,
      type: 'line'
    }),
    data: data,
    fields: fields
  });
  return _react["default"].createElement(_Visualization.Visualization, {
    config: config,
    data: data,
    fields: fields,
    height: 600,
    width: 800
  });
};
exports.DefaultYAxisSingleMeasure = DefaultYAxisSingleMeasure;
//# sourceMappingURL=Line.stories.js.map