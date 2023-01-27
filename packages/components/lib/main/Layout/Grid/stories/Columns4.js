"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Columns4;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Columns4() {
  return _react["default"].createElement(_.Grid, {
    columns: 4
  }, _react["default"].createElement(_.Box, {
    border: true,
    minHeight: "5rem"
  }, "A"), _react["default"].createElement(_.Box, {
    border: true
  }, "B"), _react["default"].createElement(_.Box, {
    border: true
  }, "C"), _react["default"].createElement(_.Box, {
    border: true
  }, "D"));
}
//# sourceMappingURL=Columns4.js.map