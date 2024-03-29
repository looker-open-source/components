"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Borders;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Borders() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    width: "50px",
    height: "50px",
    bg: "keyAccent",
    border: "ui3",
    borderRadius: "4px"
  }, "I've got borders."));
}
//# sourceMappingURL=Borders.js.map