"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NoErrorIcon;
var _react = _interopRequireDefault(require("react"));
var _InputText = require("../InputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NoErrorIcon() {
  return _react["default"].createElement(_InputText.InputText, {
    validationType: "error",
    noErrorIcon: true
  });
}
//# sourceMappingURL=NoErrorIcon.js.map