"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yAxis = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
var _isNull = _interopRequireDefault(require("lodash/isNull"));
var _excluded = ["y_axes", "y_axis_reversed", "y_axis_gridlines", "y_axis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var deriveDefaults = function deriveDefaults(axisRaw, axisOfficial, fallbackLabel) {
  var showLabels = axisRaw.showLabels,
    showValues = axisRaw.showValues,
    minValue = axisRaw.minValue,
    maxValue = axisRaw.maxValue,
    labelRaw = axisRaw.label,
    y_axis_gridlines = axisRaw.y_axis_gridlines;
  var yAxisLabel = labelRaw || fallbackLabel;

  var _ref = axisOfficial,
    _ref$gridlines = _ref.gridlines,
    gridlines = _ref$gridlines === void 0 ? y_axis_gridlines : _ref$gridlines,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? showLabels === false ? false : yAxisLabel : _ref$label,
    _ref$range = _ref.range,
    range = _ref$range === void 0 ? [minValue === undefined ? 'auto' : minValue, maxValue === undefined ? 'auto' : maxValue] : _ref$range,
    _ref$values = _ref.values,
    values = _ref$values === void 0 ? showValues : _ref$values;
  return {
    gridlines: typeof gridlines === 'undefined' ? true : gridlines,
    label: label,
    range: range,
    values: typeof values === 'undefined' ? true : values
  };
};

var yAxis = function yAxis(_ref2) {
  var config = _ref2.config,
    data = _ref2.data,
    fields = _ref2.fields;
  var _config$y_axes = config.y_axes,
    y_axis_raw = _config$y_axes === void 0 ? [{}] : _config$y_axes,
    _config$y_axis_revers = config.y_axis_reversed,
    y_axis_reversed = _config$y_axis_revers === void 0 ? false : _config$y_axis_revers,
    _config$y_axis_gridli = config.y_axis_gridlines,
    y_axis_gridlines = _config$y_axis_gridli === void 0 ? true : _config$y_axis_gridli,
    _config$y_axis = config.y_axis,
    y_axis = _config$y_axis === void 0 ? [{}] : _config$y_axis,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var longestListLength = Math.max(y_axis_raw.length, y_axis.length);
  var numberOfMeasureLabels = Array.from(new Set(fields.measures.map(function (measure) {
    return measure.label;
  }))).length;
  var yAxisWithDefaults = [];
  for (var i = 0; i < longestListLength; i++) {
    var rawAxisAtPosition = (0, _omitBy["default"])(y_axis_raw[i] || {}, _isNull["default"]);
    var officialAxisAtPosition = y_axis[i] || {};

    var _ref4 = fields.measures[i] || {},
      label = _ref4.label,
      view_label = _ref4.view_label;
    var fallbackLabel = numberOfMeasureLabels === 1 ? label || view_label : undefined;
    yAxisWithDefaults[i] = deriveDefaults(_objectSpread(_objectSpread({}, rawAxisAtPosition), {}, {
      y_axis_gridlines: y_axis_gridlines,
      y_axis_reversed: y_axis_reversed
    }), officialAxisAtPosition, fallbackLabel);
  }
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      y_axis: yAxisWithDefaults
    }),
    data: data,
    fields: fields
  };
};
exports.yAxis = yAxis;
//# sourceMappingURL=yAxis.js.map