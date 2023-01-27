"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Basic() {
  return _react["default"].createElement(_.Drawer, {
    content: "Something in the drawer"
  }, _react["default"].createElement(_.Button, null, "Open Drawer"));
}
//# sourceMappingURL=Basic.js.map