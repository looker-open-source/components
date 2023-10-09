"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HoverDisclosure;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
var _Button = require("../../Button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HoverDisclosure() {
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
}
//# sourceMappingURL=HoverDisclosure.js.map