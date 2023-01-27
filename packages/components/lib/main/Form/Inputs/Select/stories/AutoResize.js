"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoResize;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

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