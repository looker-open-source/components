"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverWithLayout;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PopoverWithLayout() {
  return _react["default"].createElement(_.Popover, {
    width: 640,
    content: _react["default"].createElement(_.PopoverLayout, {
      header: "Header text",
      footer: true
    }, "We the People of the United States")
  }, _react["default"].createElement(_components.Button, null, "Open"));
}
//# sourceMappingURL=PopoverWithLayout.js.map