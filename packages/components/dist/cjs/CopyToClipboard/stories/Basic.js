"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_.CopyToClipboard, {
    content: "here is some text to be copied"
  });
}
//# sourceMappingURL=Basic.js.map