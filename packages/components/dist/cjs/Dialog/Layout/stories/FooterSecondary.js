"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterSecondary;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FooterSecondary() {
  return _react["default"].createElement(_.Box, {
    bg: "ui1"
  }, _react["default"].createElement(_.DialogLayout, {
    footer: "Footer text",
    footerSecondary: "Cancel"
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."));
}
//# sourceMappingURL=FooterSecondary.js.map