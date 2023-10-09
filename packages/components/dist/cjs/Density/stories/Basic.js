"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Basic() {
  return _react["default"].createElement(_.Density, {
    scale: 0
  }, _react["default"].createElement(_.List, null, _react["default"].createElement(_.ListItem, null, "Cheddar"), _react["default"].createElement(_.ListItem, null, "Gouda"), _react["default"].createElement(_.ListItem, null, "Swiss")));
}
//# sourceMappingURL=Basic.js.map