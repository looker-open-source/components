"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Basic() {
  return _react["default"].createElement(_.Dialog, {
    content: "Simple Content"
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=Basic.js.map