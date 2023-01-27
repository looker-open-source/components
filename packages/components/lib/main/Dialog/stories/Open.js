"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Open;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");

function Open() {
  return _react["default"].createElement(_.Dialog, {
    defaultOpen: true,
    content: "Simple Content"
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=Open.js.map