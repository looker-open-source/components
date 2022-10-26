"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentOverflow = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

var _Text = require("../../Text");

var _Popover = require("../Popover");

var _PopoverContent = require("../Layout/PopoverContent");

var ContentOverflow = function ContentOverflow(_ref) {
  var children = _ref.children;
  return _react["default"].createElement(_Layout.Box2, {
    position: "absolute",
    top: "40%",
    left: "40%"
  }, _react["default"].createElement(_Popover.Popover, {
    pin: true,
    placement: "bottom",
    content: _react["default"].createElement(_PopoverContent.PopoverContent, {
      width: "18rem"
    }, _react["default"].createElement(_Text.Paragraph, null, "Stuff above spacer"), _react["default"].createElement(_Layout.Box2, {
      height: "60vh",
      bg: "ui1"
    }, "Spacer"), _react["default"].createElement(_Text.Paragraph, null, "Content below spacer"))
  }, _react["default"].createElement(_Button.ButtonOutline, {
    iconAfter: _react["default"].createElement(_material.ArrowDropDown, null),
    m: "xxlarge"
  }, children)));
};

exports.ContentOverflow = ContentOverflow;
//# sourceMappingURL=ContentOverflow.js.map