"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ValidationMessage;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _excluded = ["label", "validationMessage"];
function ValidationMessage(props) {
  var _props$label = props.label,
    label = _props$label === void 0 ? 'Label' : _props$label,
    _props$validationMess = props.validationMessage,
    validationMessage = _props$validationMess === void 0 ? {
      message: 'validation Message',
      type: 'error'
    } : _props$validationMess,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  return _react["default"].createElement(_.FieldTime, (0, _extends2["default"])({
    label: label,
    validationMessage: validationMessage
  }, restProps));
}
//# sourceMappingURL=ValidationMessage.js.map