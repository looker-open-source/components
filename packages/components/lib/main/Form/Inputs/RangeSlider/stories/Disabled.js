"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["defaultValue", "disabled"];
function Disabled(props) {
  var _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? [2, 3] : _props$defaultValue,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? true : _props$disabled,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.RangeSlider, (0, _extends2["default"])({
    defaultValue: defaultValue,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map