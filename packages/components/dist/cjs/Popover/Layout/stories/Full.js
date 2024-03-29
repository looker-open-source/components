"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Full;
var _react = _interopRequireDefault(require("react"));
var _components = require("@looker/components");
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Full() {
  return _react["default"].createElement(_.PopoverLayout, {
    footer: _react["default"].createElement(_components.ButtonTransparent, {
      color: "neutral",
      size: "small"
    }, "Cancel"),
    header: "Header Text"
  }, "We the People of the United States");
}
//# sourceMappingURL=Full.js.map