"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ValidationMessage;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _excluded = ["required", "name", "label", "validationMessage"];
function ValidationMessage(props) {
  var _props$required = props.required,
    required = _props$required === void 0 ? true : _props$required,
    _props$name = props.name,
    name = _props$name === void 0 ? 'firstName' : _props$name,
    _props$label = props.label,
    label = _props$label === void 0 ? 'First Name' : _props$label,
    _props$validationMess = props.validationMessage,
    validationMessage = _props$validationMess === void 0 ? {
      message: 'This is an error',
      type: 'error'
    } : _props$validationMess,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldText, (0, _extends2["default"])({
    name: name,
    label: label,
    required: required,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map