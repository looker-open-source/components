"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CloseIconButton;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function CloseIconButton() {
  return _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_.DialogLayout, {
      header: "Has a close icon button"
    }, "Some content")
  }, _react["default"].createElement(_.Button, null, "Open Dialog"));
}
//# sourceMappingURL=CloseIconButton.js.map