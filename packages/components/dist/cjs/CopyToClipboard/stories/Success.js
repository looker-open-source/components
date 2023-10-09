"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Success;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Success() {
  return _react["default"].createElement(_.CopyToClipboard, {
    content: "here is some text to be copied",
    success: "it was copied"
  });
}
//# sourceMappingURL=Success.js.map