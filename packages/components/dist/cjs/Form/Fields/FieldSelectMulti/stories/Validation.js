"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Validation;
var _react = _interopRequireDefault(require("react"));
var _FieldSelectMulti = require("../../FieldSelectMulti");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Validation() {
  return _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    label: "Label",
    options: [{
      label: 'Grape',
      value: 'grape'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Apple',
      value: 'apple'
    }],
    placeholder: "Search fruits",
    isFilterable: true,
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    }
  });
}
//# sourceMappingURL=Validation.js.map