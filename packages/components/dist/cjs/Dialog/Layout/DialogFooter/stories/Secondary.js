"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Secondary;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Secondary() {
  return _react["default"].createElement(_.DialogFooter, {
    secondary: _react["default"].createElement("button", null, "Done")
  }, "Footer Text");
}
//# sourceMappingURL=Secondary.js.map