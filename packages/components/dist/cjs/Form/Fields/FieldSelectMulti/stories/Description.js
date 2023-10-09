"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;
var _react = _interopRequireDefault(require("react"));
var _FieldSelectMulti = require("../../FieldSelectMulti");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Description() {
  return _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    description: "this is the description",
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
    isFilterable: true
  });
}
//# sourceMappingURL=Description.js.map