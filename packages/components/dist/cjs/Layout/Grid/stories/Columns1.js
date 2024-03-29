"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Columns1;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Columns1() {
  return _react["default"].createElement(_.Grid, {
    columns: 1
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
//# sourceMappingURL=Columns1.js.map