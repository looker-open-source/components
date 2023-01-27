"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Positioning;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function Positioning() {
  return _react["default"].createElement(_.Space, {
    bg: "ui3",
    m: "u1"
  }, _react["default"].createElement(_.Box, {
    p: "u3",
    position: "relative"
  }, _react["default"].createElement(_.Box, {
    position: "absolute",
    top: "0",
    right: "0",
    bg: "negative",
    color: "inverseOn"
  }, "I'm absolutely positioned!")));
}
//# sourceMappingURL=Positioning.js.map