"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnly;
var _react = _interopRequireDefault(require("react"));
var _InputText = require("../InputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ReadOnly() {
  return _react["default"].createElement(_InputText.InputText, {
    value: "You can't change me.",
    readOnly: true
  });
}
//# sourceMappingURL=ReadOnly.js.map