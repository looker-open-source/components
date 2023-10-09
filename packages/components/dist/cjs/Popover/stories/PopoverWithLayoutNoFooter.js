"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverWithLayoutNoFooter;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PopoverWithLayoutNoFooter() {
  return _react["default"].createElement(_.Popover, {
    width: 640,
    content: _react["default"].createElement(_.PopoverLayout, {
      header: "Header text",
      footer: false
    }, "We the People of the United States")
  }, _react["default"].createElement(_components.Button, null, "Open"));
}
//# sourceMappingURL=PopoverWithLayoutNoFooter.js.map