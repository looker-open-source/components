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
var _excluded = ["disabled", "defaultValue", "interval", "label"];
function Disabled(props) {
  var _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? true : _props$disabled,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? '14:30' : _props$defaultValue,
    _props$interval = props.interval,
    interval = _props$interval === void 0 ? 10 : _props$interval,
    _props$label = props.label,
    label = _props$label === void 0 ? 'Select Time' : _props$label,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldTimeSelect, (0, _extends2["default"])({
    disabled: disabled,
    label: label,
    defaultValue: defaultValue,
    interval: interval
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map