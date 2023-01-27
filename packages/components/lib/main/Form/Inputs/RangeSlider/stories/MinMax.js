"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MinMax;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["min", "max", "defaultValue"];
function MinMax(props) {
  var _props$min = props.min,
    min = _props$min === void 0 ? 10 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 20 : _props$max,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [13, 17] : _props$defaultValue,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    min: min,
    max: max,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=MinMax.js.map