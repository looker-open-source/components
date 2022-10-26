"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Underline;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Underline() {
  return _react["default"].createElement(_.Space, {
    around: true
  }, _react["default"].createElement(_.Link, {
    href: "https://google.com"
  }, "By default, underline appears on hover"), _react["default"].createElement(_.Link, {
    href: "https://google.com",
    underline: true
  }, "I always have an underline"), _react["default"].createElement(_.Link, {
    href: "https://google.com",
    underline: false
  }, "I never have an underline"));
}

Underline.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Underline.js.map