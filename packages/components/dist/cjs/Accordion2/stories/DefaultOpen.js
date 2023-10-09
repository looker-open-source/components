"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DefaultOpen;
var _react = _interopRequireDefault(require("react"));
var _ = require("../..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DefaultOpen() {
  return _react["default"].createElement(_.Accordion2, {
    defaultOpen: true,
    onClose: function onClose() {
      return alert('Closing doors');
    },
    onOpen: function onOpen() {
      return alert('Opening doors');
    },
    label: "Show me some other cheese!"
  }, "Swiss");
}
//# sourceMappingURL=DefaultOpen.js.map