"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoResize;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AutoResize() {
  return _react["default"].createElement(_.Select, {
    autoResize: true,
    placeholder: "Width adjusts to current value",
    options: [{
      label: 'Short label',
      value: 'short'
    }, {
      label: 'Very long label that widens the input considerably',
      value: 'long'
    }]
  });
}
//# sourceMappingURL=AutoResize.js.map