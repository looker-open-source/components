"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OpenDelayNone;
var _react = _interopRequireDefault(require("react"));
var _Tooltip = require("../Tooltip");
var _Button = require("../../Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OpenDelayNone() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: 'Simple Content',
    delay: 'none',
    isOpen: true
  }, _react["default"].createElement(_Button.Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=OpenDelayNone.js.map