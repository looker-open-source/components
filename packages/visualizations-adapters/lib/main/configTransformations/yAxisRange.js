"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yAxisRange = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _omitBy = _interopRequireDefault(require("lodash/omitBy"));
var _isNull = _interopRequireDefault(require("lodash/isNull"));
var _excluded = ["y_axes", "y_axis"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var yAxisRange = function yAxisRange(_ref) {
  var config = _ref.config,
    data = _ref.data,
    fields = _ref.fields;
  var _config$y_axes = config.y_axes,
    y_axis_raw = _config$y_axes === void 0 ? [{}] : _config$y_axes,
    _config$y_axis = config.y_axis,
    y_axis = _config$y_axis === void 0 ? [{}] : _config$y_axis,
    restConfig = (0, _objectWithoutProperties2["default"])(config, _excluded);
  var longestListLength = Math.max(y_axis_raw.length, y_axis.length);
  var yAxisWithDefaults = [];
  for (var i = 0; i < longestListLength; i++) {
    var rawAxisAtPosition = (0, _omitBy["default"])(y_axis_raw[i] || {}, _isNull["default"]);
    var officialAxisAtPosition = y_axis[i] || {};

    var minValue = rawAxisAtPosition.minValue,
      maxValue = rawAxisAtPosition.maxValue;

    var _officialAxisAtPositi2 = officialAxisAtPosition.range,
      range = _officialAxisAtPositi2 === void 0 ? [minValue === undefined ? 'auto' : minValue, maxValue === undefined ? 'auto' : maxValue] : _officialAxisAtPositi2;
    yAxisWithDefaults[i] = _objectSpread(_objectSpread({}, officialAxisAtPosition), {}, {
      range: range
    });
  }
  return {
    config: _objectSpread(_objectSpread({}, restConfig), {}, {
      y_axis: yAxisWithDefaults
    }),
    data: data,
    fields: fields
  };
};
exports.yAxisRange = yAxisRange;
//# sourceMappingURL=yAxisRange.js.map