"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_.PageSize, {
    total: 100,
    value: 100,
    onChange: function onChange(value) {
      return alert("You chose ".concat(value, " per page"));
    }
  });
}
//# sourceMappingURL=Basic.js.map