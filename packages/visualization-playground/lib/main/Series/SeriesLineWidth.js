"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeriesLineWidth = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _has = _interopRequireDefault(require("lodash/has"));
var _excluded = ["chartType", "series", "onSeriesChange"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var renderFor = ['area', 'line', 'scatter', 'sparkline'];
var SeriesLineWidth = function SeriesLineWidth(props) {
  var chartType = props.chartType,
    series = props.series,
    onSeriesChange = props.onSeriesChange,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  if (!renderFor.includes(chartType) && !(0, _has["default"])(series, 'line_width')) {
    return null;
  }
  var handleChange = function handleChange(e) {
    var draft = _objectSpread(_objectSpread({}, series), {}, {
      line_width: parseInt(e.target.value)
    });
    onSeriesChange(draft);
  };
  return _react["default"].createElement(_components.FieldSlider, (0, _extends2["default"])({
    label: chartType === 'scatter' ? 'Point Border Width' : 'Line Width',
    min: 1,
    max: 15,
    onChange: handleChange,
    value: series.line_width
  }, restProps));
};
exports.SeriesLineWidth = SeriesLineWidth;
//# sourceMappingURL=SeriesLineWidth.js.map