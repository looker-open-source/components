"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChildComponent;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function ChildComponent() {
  return _react["default"].createElement(_.CopyToClipboard, {
    content: "here is some text to be copied",
    success: _react["default"].createElement(_.Button, null, "Success")
  }, _react["default"].createElement(_.Button, null, "Copy stuff"));
}
//# sourceMappingURL=ChildComponent.js.map