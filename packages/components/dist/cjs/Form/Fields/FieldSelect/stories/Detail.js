"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Detail;
var _react = _interopRequireDefault(require("react"));
var _FieldSelect = require("../../FieldSelect");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Detail() {
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
    detail: "0/50"
  });
}
//# sourceMappingURL=Detail.js.map