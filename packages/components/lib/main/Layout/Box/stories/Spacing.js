"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Spacing;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Spacing() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Space, {
    bg: "ui2",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "ui3",
    m: "u5"
  }, "Margin All Sides - 20px")), _react["default"].createElement(_.Space, {
    bg: "ui2",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "ui3",
    pl: "u1"
  }, "Padding left - 4px")), _react["default"].createElement(_.Space, {
    bg: "ui2",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "ui3",
    pl: "u4"
  }, "Padding left - 16px")), _react["default"].createElement(_.Space, {
    bg: "ui2",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "ui3",
    my: "u10",
    ml: "u8"
  }, "Margin Top & Bottom - 40px, Margin left - 32px")), _react["default"].createElement(_.Space, {
    bg: "ui2",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    bg: "ui3",
    pb: "u12",
    ml: "u15"
  }, "Padding Bottom - 48px, Margin left - 60px")));
}
//# sourceMappingURL=Spacing.js.map