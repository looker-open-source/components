"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Overflow;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../../..");

function Overflow() {
  return _react["default"].createElement(_.Box, {
    height: "10rem",
    display: "flex",
    bg: "white",
    p: "u5"
  }, _react["default"].createElement(_.DialogContent, null, _react["default"].createElement(_.Paragraph, null, "Scroll down here..."), _react["default"].createElement(_.Box, {
    height: "12rem",
    bg: "rebeccapurple"
  })));
}
//# sourceMappingURL=Overflow.js.map