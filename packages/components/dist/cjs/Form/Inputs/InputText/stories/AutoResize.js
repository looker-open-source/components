"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoResize;
var _react = _interopRequireDefault(require("react"));
var _InputText = require("../InputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AutoResize() {
  return _react["default"].createElement(_InputText.InputText, {
    autoResize: true,
    placeholder: "Start typing"
  });
}
//# sourceMappingURL=AutoResize.js.map