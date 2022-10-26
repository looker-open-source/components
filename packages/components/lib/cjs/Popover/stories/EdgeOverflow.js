"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EdgeOverflow = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _Button = require("../../Button");

var _Layout = require("../../Layout");

var _Popover = require("../Popover");

var _PopoverContent = require("../Layout/PopoverContent");

var EdgeOverflow = function EdgeOverflow(_ref) {
  var children = _ref.children,
      top = _ref.top,
      left = _ref.left,
      bottom = _ref.bottom,
      right = _ref.right;
  return _react["default"].createElement(_Layout.Box2, {
    position: "absolute",
    top: top,
    left: left,
    bottom: bottom,
    right: right
  }, _react["default"].createElement(_Popover.Popover, {
    content: _react["default"].createElement(_PopoverContent.PopoverContent, {
      width: "18rem",
      height: "5rem"
    }, "There's stuff here... it hits the edge", ' ')
  }, _react["default"].createElement(_Button.ButtonOutline, {
    iconAfter: _react["default"].createElement(_material.ArrowDropDown, null),
    m: "xxlarge"
  }, children)));
};

exports.EdgeOverflow = EdgeOverflow;
//# sourceMappingURL=EdgeOverflow.js.map