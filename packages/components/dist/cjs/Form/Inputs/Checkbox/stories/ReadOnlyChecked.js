"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReadOnlyChecked;
var _react = _interopRequireDefault(require("react"));
var _Checkbox = require("../Checkbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ReadOnlyChecked() {
  return _react["default"].createElement(_Checkbox.Checkbox, {
    readOnly: true,
    checked: true
  });
}
//# sourceMappingURL=ReadOnlyChecked.js.map