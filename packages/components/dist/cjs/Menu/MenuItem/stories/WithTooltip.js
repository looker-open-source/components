"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithTooltip;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function WithTooltip() {
  return _react["default"].createElement(_.MenuList, null, _react["default"].createElement(_.Tooltip, {
    content: "It is gouda!",
    placement: "left"
  }, _react["default"].createElement(_.MenuItem, null, "Gouda")));
}
//# sourceMappingURL=WithTooltip.js.map