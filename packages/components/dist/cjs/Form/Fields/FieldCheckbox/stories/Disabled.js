"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Disabled;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Disabled() {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    disabled: true,
    id: "id",
    label: "disabled",
    name: "thumbsUp"
  });
}
//# sourceMappingURL=Disabled.js.map