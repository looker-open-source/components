"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Value;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["value", "defaultValue"];
function Value(props) {
  var _props$value = props.value,
    value = _props$value === void 0 ? [3, 8] : _props$value,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [3, 8] : _props$defaultValue,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    defaultValue: defaultValue
  }, restProps)), _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    value: value
  }, restProps)));
}
//# sourceMappingURL=Value.js.map