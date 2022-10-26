"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Default;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

function Default() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Simple Content"
  }, _react["default"].createElement(_Button.Button, {
    m: "xxxlarge"
  }, "Open Tooltip"));
}
//# sourceMappingURL=Default.js.map