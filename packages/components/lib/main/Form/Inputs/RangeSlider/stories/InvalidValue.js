"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InvalidValue;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["min", "max", "defaultValue"];
function InvalidValue(props) {
  var _props$min = props.min,
    min = _props$min === void 0 ? 100 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 200 : _props$max,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [105, 1950] : _props$defaultValue,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    min: min,
    max: max,
    defaultValue: defaultValue
  }, restProps));
}
//# sourceMappingURL=InvalidValue.js.map