"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MaxWidth;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function MaxWidth() {
  return _react["default"].createElement(_.Space, {
    gap: "u1"
  }, _react["default"].createElement(_.ChipButton, {
    maxWidth: 150
  }, "short"), _react["default"].createElement(_.ChipButton, {
    maxWidth: 150
  }, "Very long text inside the chip will be truncated"));
}
//# sourceMappingURL=MaxWidth.js.map