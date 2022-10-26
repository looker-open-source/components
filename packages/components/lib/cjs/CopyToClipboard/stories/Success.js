"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Success;

var _react = _interopRequireDefault(require("react"));

var _ = require("../..");

function Success() {
  return _react["default"].createElement(_.CopyToClipboard, {
    content: "here is some text to be copied",
    success: "it was copied"
  });
}
//# sourceMappingURL=Success.js.map