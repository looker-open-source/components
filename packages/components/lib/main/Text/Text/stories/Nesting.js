"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nesting;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Nesting() {
  return _react["default"].createElement("div", {
    style: {
      color: '#c00'
    }
  }, _react["default"].createElement(_.Text, null, "This text should be red"));
}
//# sourceMappingURL=Nesting.js.map