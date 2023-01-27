"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterWithChildren;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _ButtonTransparent = require("../../../../Button/ButtonTransparent");

function FooterWithChildren() {
  return _react["default"].createElement(_.PopoverFooter, null, _react["default"].createElement(_ButtonTransparent.ButtonTransparent, {
    color: "neutral",
    size: "small"
  }, "Cancel"));
}
//# sourceMappingURL=FooterWithChildren.js.map