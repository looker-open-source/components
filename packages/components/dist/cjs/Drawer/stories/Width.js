"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Width;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Width() {
  return _react["default"].createElement(_.Drawer, {
    content: "Something in the drawer",
    width: "50rem"
  }, _react["default"].createElement(_.Button, null, "Open Drawer"));
}
//# sourceMappingURL=Width.js.map