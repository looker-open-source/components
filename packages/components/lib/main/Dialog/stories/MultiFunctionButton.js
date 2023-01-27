"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiFunctionButton;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function MultiFunctionButton() {
  return _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_.DialogLayout, {
      header: "A Dialog Example"
    }, _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, _react["default"].createElement(_.Button, null, "Copy"))))
  }, _react["default"].createElement(_.Button, null, "Open Dialog"));
}
//# sourceMappingURL=MultiFunctionButton.js.map