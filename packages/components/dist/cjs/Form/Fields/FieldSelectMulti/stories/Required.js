"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Required;
var _react = _interopRequireDefault(require("react"));
var _FieldSelectMulti = require("../../FieldSelectMulti");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Required() {
  return _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    description: "required",
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
    required: true
  });
}
//# sourceMappingURL=Required.js.map