"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Required;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckboxGroup = require("../../FieldCheckboxGroup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Required() {
  var options = [{
    label: 'Cheddar',
    value: 'cheddar'
  }, {
    label: 'Gouda',
    value: 'gouda'
  }, {
    label: 'Swiss',
    value: 'swiss'
  }, {
    label: 'Roquefort',
    value: 'roquefort'
  }];
  return _react["default"].createElement(_FieldCheckboxGroup.FieldCheckboxGroup, {
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options,
    required: true
  });
}
//# sourceMappingURL=Required.js.map