"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PointStyleNone = exports.PointStyleFilled = exports.Pivot = exports.Line = exports.DefaultYAxisSingleMeasure = void 0;
var _react = _interopRequireDefault(require("react"));
var _Visualization = require("../Visualization");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _excluded = ["config"],
  _excluded2 = ["orders.average_total_amount_of_order_usd"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/Line'
};
exports["default"] = _default;
var Template = function Template(_ref) {
  var configProp = _ref.config,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var data = (0, _visualizationsAdapters.tabularResponse)(_toConsumableArray(_visualizationsAdapters.mockSdkDataResponse));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), configProp), {}, {
      type: 'line'
    }),
    data: data,
    fields: _visualizationsAdapters.mockSdkFieldsResponse
  });
  return _react["default"].createElement(_Visualization.Visualization, _extends({
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
    data: _toConsumableArray(_visualizationsAdapters.mockSdkPivotDataResponse),
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
var DefaultYAxisSingleMeasure = function DefaultYAxisSingleMeasure() {
  var fields = _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkFieldsResponse), {}, {
    measures: _visualizationsAdapters.mockSdkFieldsResponse.measures.slice(0, 1)
  });
  var data = (0, _visualizationsAdapters.tabularResponse)(_toConsumableArray(_visualizationsAdapters.mockSdkDataResponse).map(function (datum) {
    var _ordersAverageEtc = datum['orders.average_total_amount_of_order_usd'],
      rest = _objectWithoutProperties(datum, _excluded2);
    return rest;
  }));
  var config = (0, _visualizationsAdapters.buildChartConfig)({
    config: _objectSpread(_objectSpread({}, _visualizationsAdapters.mockSdkConfigResponse), {}, {
      y_axis: undefined,
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