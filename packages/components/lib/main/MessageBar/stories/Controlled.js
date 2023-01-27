"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _utils = require("../../utils");

function Controlled() {
  var _useToggle = (0, _utils.useToggle)(true),
    value = _useToggle.value,
    setOff = _useToggle.setOff,
    setOn = _useToggle.setOn;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.MessageBar, {
    intent: "warn",
    onPrimaryClick: setOff,
    visible: value
  }, "I can be closed and reopened"), !value && _react["default"].createElement(_.ButtonOutline, {
    m: "u4",
    onClick: setOn
  }, "Show MessageBar"));
}
//# sourceMappingURL=Controlled.js.map