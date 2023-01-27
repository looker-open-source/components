"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Header() {
  return _react["default"].createElement(_.PopoverLayout, {
    footer: false,
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=Header.js.map