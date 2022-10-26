"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = KeyColor;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function KeyColor() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Link, {
    href: "https://google.com",
    keyColor: true
  }, "Rendered in the brand color"));
}

KeyColor.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=KeyColor.js.map