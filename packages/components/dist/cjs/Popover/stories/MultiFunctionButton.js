"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MultiFunctionButton;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MultiFunctionButton() {
  return _react["default"].createElement(_.Popover, {
    content: _react["default"].createElement(_.PopoverContent, null, _react["default"].createElement(_components.CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, _react["default"].createElement(_components.Button, null, "Copy")))
  }, _react["default"].createElement(_components.Button, null, "Open Popover"));
}
//# sourceMappingURL=MultiFunctionButton.js.map