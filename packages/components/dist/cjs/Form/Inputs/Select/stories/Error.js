"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Error;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Error() {
  return _react["default"].createElement(_.Select, {
    options: [{
      label: 'Cheddar',
      value: 'cheddar'
    }, {
      label: 'Gouda',
      value: 'gouda'
    }, {
      label: 'Swiss',
      value: 'swiss'
    }],
    validationType: "error"
  });
}
//# sourceMappingURL=Error.js.map