"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DisabledStory;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["name", "label", "defaultValue", "disabled"];
function DisabledStory(props) {
  var _props$name = props.name,
    name = _props$name === void 0 ? 'firstName' : _props$name,
    _props$label = props.label,
    label = _props$label === void 0 ? 'First Name' : _props$label,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? 'Default value' : _props$defaultValue,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? true : _props$disabled,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldTextArea, (0, _extends2["default"])({
    name: name,
    label: label,
    defaultValue: defaultValue,
    disabled: disabled
  }, restProps));
}
//# sourceMappingURL=Disabled.js.map