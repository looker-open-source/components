"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = require("../../Card");

var _CardContent = require("../../CardContent");

var _Text = require("../../../Text");

var _default = function _default() {
  return _react["default"].createElement(_Card.Card, {
    raised: true
  }, _react["default"].createElement(_CardContent.CardContent, null, _react["default"].createElement(_Text.Heading, {
    fontSize: "xxxlarge"
  }, "\uD83C\uDF89 Looker Release Notes \uD83C\uDF89"), _react["default"].createElement(_Text.Heading, {
    as: "h4",
    fontSize: "small"
  }, "Read all about our latest features"), _react["default"].createElement(_Text.Paragraph, {
    fontSize: "xsmall",
    color: "text1"
  }, "Last updated 3 days ago")));
};

exports["default"] = _default;
//# sourceMappingURL=Example.js.map