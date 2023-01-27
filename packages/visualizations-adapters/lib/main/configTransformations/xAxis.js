"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xAxis = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
var _isNull = _interopRequireDefault(require("lodash/isNull"));
var _excluded = ["x_axis_reversed", "x_axis_gridlines", "show_x_axis_ticks", "show_x_axis_label", "x_axis_label", "x_axis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var deriveDefaults = function deriveDefaults(axisRaw, axisOfficial, measure) {
  var measureLabel = measure.label,
    measureViewLabel = measure.view_label;

  var _ref = axisRaw,
    x_axis_reversed = _ref.x_axis_reversed,
    x_axis_gridlines = _ref.x_axis_gridlines,
    show_x_axis_ticks = _ref.show_x_axis_ticks,
    show_x_axis_label = _ref.show_x_axis_label,
    _ref$x_axis_label = _ref.x_axis_label,
    x_axis_label = _ref$x_axis_label === void 0 ? measureLabel || measureViewLabel : _ref$x_axis_label;

  var _ref2 = axisOfficial,
    _ref2$gridlines = _ref2.gridlines,
    gridlines = _ref2$gridlines === void 0 ? x_axis_gridlines : _ref2$gridlines,
    _ref2$label = _ref2.label,
    label = _ref2$label === void 0 ? show_x_axis_label === false ? false : x_axis_label : _ref2$label,
    _ref2$reversed = _ref2.reversed,
    reversed = _ref2$reversed === void 0 ? x_axis_reversed : _ref2$reversed,
    _ref2$values = _ref2.values,
    values = _ref2$values === void 0 ? show_x_axis_ticks : _ref2$values;
  return {
    gridlines: typeof gridlines === 'undefined' ? true : gridlines,
    label: label === null ? false : label,
    reversed: !!reversed,
    values: typeof values === 'undefined' ? true : values
  };
};

var xAxis = function xAxis(_ref3) {
  var config = _ref3.config,
    data = _ref3.data,
    fields = _ref3.fields;
  var _config$x_axis_revers = config.x_axis_reversed,
    x_axis_reversed = _config$x_axis_revers === void 0 ? false : _config$x_axis_revers,
    _config$x_axis_gridli = config.x_axis_gridlines,
    x_axis_gridlines = _config$x_axis_gridli === void 0 ? true : _config$x_axis_gridli,
    _config$show_x_axis_t = config.show_x_axis_ticks,
    show_x_axis_ticks = _config$show_x_axis_t === void 0 ? true : _config$show_x_axis_t,
    _config$show_x_axis_l = config.show_x_axis_label,
    show_x_axis_label = _config$show_x_axis_l === void 0 ? true : _config$show_x_axis_l,
    x_axis_label = config.x_axis_label,
    _config$x_axis = config.x_axis,
    x_axis = _config$x_axis === void 0 ? [{}] : _config$x_axis,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);

  var xAxisRaw = [{
    x_axis_reversed: x_axis_reversed,
    x_axis_gridlines: x_axis_gridlines,
    show_x_axis_ticks: show_x_axis_ticks,
    show_x_axis_label: show_x_axis_label,
    x_axis_label: x_axis_label
  }];
  var longestListLength = Math.max(xAxisRaw.length, x_axis.length);
  var xAxisWithDefaults = [];
  for (var i = 0; i < longestListLength; i++) {
    var _fields$dimensions;
    var rawAxisAtPosition = (0, _omitBy["default"])(xAxisRaw[i] || {}, _isNull["default"]);
    var officialAxisAtPosition = x_axis[i] || {};
    var measureAtPosition = (fields === null || fields === void 0 ? void 0 : (_fields$dimensions = fields.dimensions) === null || _fields$dimensions === void 0 ? void 0 : _fields$dimensions[i]) || {};
    xAxisWithDefaults[i] = deriveDefaults(rawAxisAtPosition, officialAxisAtPosition, measureAtPosition);
  }
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      x_axis: xAxisWithDefaults
    }),
    data: data,
    fields: fields
  };
};
exports.xAxis = xAxis;
//# sourceMappingURL=xAxis.js.map