"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Header() {
  return _react["default"].createElement(_.PopoverLayout, {
    footer: false,
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=Header.js.map