"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckbox = require("../../FieldCheckbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Validation() {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "id",
    label: "Validation error",
    name: "thumbsUp",
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map