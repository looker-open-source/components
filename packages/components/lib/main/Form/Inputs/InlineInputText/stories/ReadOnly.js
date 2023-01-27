"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _react = _interopRequireDefault(require("react"));
var _InlineInputText = require("../InlineInputText");

function ReadOnly() {
  return _react["default"].createElement(_InlineInputText.InlineInputText, {
    readOnly: true,
    value: "You can't change me."
  });
}
//# sourceMappingURL=ReadOnly.js.map