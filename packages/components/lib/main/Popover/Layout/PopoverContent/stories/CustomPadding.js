"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomPadding;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
var _Constitution = require("../../../../fixtures/Constitution");

function CustomPadding() {
  return _react["default"].createElement(_.PopoverContent, {
    pb: 'u3',
    pt: 'u8',
    px: 'u3'
  }, _react["default"].createElement(_Constitution.ConstitutionShort, null));
}
//# sourceMappingURL=CustomPadding.js.map