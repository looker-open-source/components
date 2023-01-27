"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _InlineInputText = require("../InlineInputText");

function Disabled() {
  return _react["default"].createElement(_InlineInputText.InlineInputText, {
    disabled: true,
    value: "You can't change me."
  });
}
//# sourceMappingURL=Disabled.js.map