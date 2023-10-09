"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _InlineInputText = require("../InlineInputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_InlineInputText.InlineInputText, {
    disabled: true,
    value: "You can't change me."
  });
}
//# sourceMappingURL=Disabled.js.map