"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Box, {
    bg: "white",
    p: "u8"
  }, "On White"), _react["default"].createElement(_.Box, {
    bg: "ui1",
    p: "u8"
  }, "On `ui1`"), _react["default"].createElement(_.Box, {
    bg: "ui2",
    p: "u8"
  }, "On `ui2`"));
}
//# sourceMappingURL=Basic.js.map