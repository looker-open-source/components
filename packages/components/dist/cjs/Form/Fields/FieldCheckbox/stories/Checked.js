"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checked;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Checked() {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    checked: true,
    defaultChecked: true,
    id: "id",
    label: "Example Field",
    name: "thumbsUp"
  });
}
//# sourceMappingURL=Checked.js.map