"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterCloseButton;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _ = require("../..");

function FooterCloseButton() {
  return _react["default"].createElement(_.PopoverLayout, {
    closeButton: _react["default"].createElement(_components.ButtonTransparent, {
      color: "neutral",
      size: "small"
    }, "Close"),
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=FooterCloseButton.js.map