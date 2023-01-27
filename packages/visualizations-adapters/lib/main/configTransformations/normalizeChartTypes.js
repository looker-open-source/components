"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeChartTypes = exports.CHART_TYPE_MAP = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _has = _interopRequireDefault(require("lodash/has"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CHART_TYPE_MAP = {
  '': 'default',
  area: 'area',
  bar: 'bar',
  column: 'column',
  "default": 'default',
  line: 'line',
  looker_area: 'area',
  looker_bar: 'bar',
  looker_column: 'column',
  looker_grid: 'table',
  looker_line: 'line',
  looker_pie: 'pie',
  looker_scatter: 'scatter',
  pie: 'pie',
  scatter: 'scatter',
  single_value: 'single_value',
  sparkline: 'sparkline',
  table: 'table'
};
exports.CHART_TYPE_MAP = CHART_TYPE_MAP;
var isKnownChartType = function isKnownChartType(type) {
  return (0, _has["default"])(CHART_TYPE_MAP, type);
};

var normalizeChartTypes = function normalizeChartTypes(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$type = config.type,
    type = _config$type === void 0 ? CHART_TYPE_MAP["default"] : _config$type;
  var normalizedType = isKnownChartType(type) ? CHART_TYPE_MAP[type] : type;
  return {
    config: _objectSpread(_objectSpread({}, config), {}, {
      type: normalizedType
    }),
    data: data,
    fields: fields
  };
};
exports.normalizeChartTypes = normalizeChartTypes;
//# sourceMappingURL=normalizeChartTypes.js.map