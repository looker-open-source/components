"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hidden;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Hidden() {
  return _react["default"].createElement(_.PopoverHeader, {
    hidden: true
  }, "Header Text");
}
//# sourceMappingURL=Hidden.js.map