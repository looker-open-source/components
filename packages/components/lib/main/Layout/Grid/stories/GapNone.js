"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GapNone;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

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