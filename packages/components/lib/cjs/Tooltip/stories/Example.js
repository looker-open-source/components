"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Example;

var _react = _interopRequireDefault(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

var _Link = require("../../Link");

function Example() {
  return _react["default"].createElement(_Tooltip.Tooltip, {
    content: _react["default"].createElement(_react["default"].Fragment, null, "This is a tooltip with quite a bit of text. It's probably not ideal to have this much text in a Tooltip. Perhaps you should link to", _react["default"].createElement(_Link.Link, {
      href: "#"
    }, "another document \u2192"))
  }, _react["default"].createElement(_Button.ButtonOutline, null, "Tooltip with lots of text"));
}
//# sourceMappingURL=Example.js.map