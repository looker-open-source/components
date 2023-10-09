"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Required;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Required() {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "id",
    label: "disabled",
    name: "thumbsUp",
    required: true
  });
}
//# sourceMappingURL=Required.js.map