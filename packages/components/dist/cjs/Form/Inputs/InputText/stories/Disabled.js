"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _InputText = require("../InputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_InputText.InputText, {
    disabled: true,
    value: "A value"
  });
}
//# sourceMappingURL=Disabled.js.map