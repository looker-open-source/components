"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GapU15;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function GapU15() {
  return _react["default"].createElement(_.Grid, {
    gap: "u15"
  }, _react["default"].createElement(_.Box, {
    border: true,
    minHeight: "5rem"
  }, "A"), _react["default"].createElement(_.Box, {
    border: true
  }, "B"));
}
//# sourceMappingURL=GapU15.js.map