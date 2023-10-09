"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextAlign;
var _react = _interopRequireDefault(require("react"));
var _Heading = require("../Heading");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TextAlign() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Heading.Heading, {
    textAlign: "left"
  }, "\u25C0\uFE0F Align left (Default) "), _react["default"].createElement(_Heading.Heading, {
    textAlign: "center"
  }, "\u25C0\uFE0F Align Center \u25B6\uFE0F"), _react["default"].createElement(_Heading.Heading, {
    textAlign: "right"
  }, "Align Right \u25B6\uFE0F"));
}
//# sourceMappingURL=TextAlign.js.map