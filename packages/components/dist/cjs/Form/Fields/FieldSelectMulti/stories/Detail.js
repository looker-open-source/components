"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Detail;
var _react = _interopRequireDefault(require("react"));
var _FieldSelectMulti = require("../../FieldSelectMulti");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Detail() {
  return _react["default"].createElement(_FieldSelectMulti.FieldSelectMulti, {
    detail: "detail...",
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
//# sourceMappingURL=Detail.js.map