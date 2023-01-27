"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inline;
var _react = _interopRequireDefault(require("react"));
var _FieldCheckboxGroup = require("../../FieldCheckboxGroup");

function Inline() {
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
    autoFocus: true,
    defaultValue: ['cheddar'],
    description: "Pick all your cheeses",
    label: "Cheeses",
    options: options,
    inline: true
  });
}
//# sourceMappingURL=Inline.js.map