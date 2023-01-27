"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placeholder;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

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