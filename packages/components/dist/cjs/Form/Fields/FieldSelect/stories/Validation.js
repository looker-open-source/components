"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;
var _react = _interopRequireDefault(require("react"));
var _FieldSelect = require("../../FieldSelect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Validation() {
  return _react["default"].createElement(_FieldSelect.FieldSelect, {
    name: "Cheeses",
    label: "Cheeses",
    defaultValue: "cheddar",
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }],
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map