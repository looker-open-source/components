"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GapNone;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function GapNone() {
  return _react["default"].createElement(_.Grid, {
    gap: "none"
  }, _react["default"].createElement(_.Box, {
    border: true,
    minHeight: "5rem"
  }, "A"), _react["default"].createElement(_.Box, {
    border: true
  }, "B"));
}
//# sourceMappingURL=GapNone.js.map