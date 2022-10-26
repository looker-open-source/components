"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverDisclosure = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _Button = require("../../Button");

var HoverDisclosure = function HoverDisclosure() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    label: "Cheeses",
    detail: {
      content: _react["default"].createElement(_Button.Button, null, "Button"),
      options: {
        accessory: true,
        hoverDisclosure: true
      }
    }
  }, _react["default"].createElement(_.TreeItem, null, "Cheddar")));
};

exports.HoverDisclosure = HoverDisclosure;
HoverDisclosure.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=HoverDisclosure.js.map