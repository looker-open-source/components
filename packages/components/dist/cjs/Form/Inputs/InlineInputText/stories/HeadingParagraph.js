"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeadingParagraph;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../../../Layout");
var _Text = require("../../../../Text");
var _InlineInputText = require("../InlineInputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HeadingParagraph() {
  return _react["default"].createElement(_Layout.Space, {
    around: true
  }, _react["default"].createElement(_Text.Heading, null, _react["default"].createElement(_InlineInputText.InlineInputText, {
    value: "Type here..."
  })), _react["default"].createElement(_Text.Paragraph, {
    color: "text1"
  }, _react["default"].createElement(_InlineInputText.InlineInputText, {
    placeholder: "Type here..."
  })));
}
//# sourceMappingURL=HeadingParagraph.js.map