"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Appearance;

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

function Appearance() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Box, {
    bg: "white ",
    p: "u8"
  }, "light appearance", _react["default"].createElement(_.DividerVertical, {
    mt: "u4",
    appearance: "light"
  })), _react["default"].createElement(_.Box, {
    bg: "ui1",
    p: "u8"
  }, "dark appearance", _react["default"].createElement(_.DividerVertical, {
    mt: "u4",
    appearance: "dark"
  })), _react["default"].createElement(_.Box, {
    bg: "ui5",
    p: "u8"
  }, "onDark appearance", _react["default"].createElement(_.DividerVertical, {
    mt: "u4",
    appearance: "onDark"
  })));
}
//# sourceMappingURL=Appearance.js.map