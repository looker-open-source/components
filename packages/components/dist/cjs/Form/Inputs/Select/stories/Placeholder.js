"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placeholder;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Placeholder() {
  return _react["default"].createElement(_.Select, {
    placeholder: "Select your cheese of choice...",
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }]
  });
}
//# sourceMappingURL=Placeholder.js.map