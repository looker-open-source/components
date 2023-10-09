"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomPadding;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _Constitution = require("../../../../fixtures/Constitution");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CustomPadding() {
  return _react["default"].createElement(_.PopoverContent, {
    pb: 'u3',
    pt: 'u8',
    px: 'u3'
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null));
}
//# sourceMappingURL=CustomPadding.js.map