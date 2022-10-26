"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Basic() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Link, {
    href: "https://google.com"
  }, "\uD83D\uDC4B I am a link!"), _react["default"].createElement(_.Link, {
    href: "https://google.com",
    id: "thumbs-up"
  }, "\uD83D\uDC4D I am a link with an id"));
}

Basic.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Basic.js.map