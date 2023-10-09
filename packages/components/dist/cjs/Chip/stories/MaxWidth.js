"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MaxWidth;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MaxWidth() {
  return _react["default"].createElement(_.Space, {
    gap: "u1"
  }, _react["default"].createElement(_.Chip, {
    maxWidth: 150
  }, "short"), _react["default"].createElement(_.Chip, {
    maxWidth: 150,
    onDelete: function onDelete() {
      return alert('deleted');
    }
  }, "Very long text inside the chip will be truncated"));
}
//# sourceMappingURL=MaxWidth.js.map