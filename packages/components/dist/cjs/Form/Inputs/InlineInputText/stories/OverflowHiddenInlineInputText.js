"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OverflowHiddenInlineInputText;
var _react = _interopRequireDefault(require("react"));
var _InlineInputText = require("../InlineInputText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function OverflowHiddenInlineInputText() {
  return _react["default"].createElement("div", {
    style: {
      border: '1px solid',
      overflow: 'hidden',
      width: '100px'
    }
  }, _react["default"].createElement(_InlineInputText.InlineInputText, {
    value: "Long example value that should require scrolling to reach"
  }));
}
//# sourceMappingURL=OverflowHiddenInlineInputText.js.map