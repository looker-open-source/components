"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomReplace;
var _react = _interopRequireDefault(require("react"));
var _ReplaceText = require("../ReplaceText");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CustomReplace() {
  return _react["default"].createElement(_ReplaceText.ReplaceText, {
    match: "che",
    replace: function replace(props) {
      return _react["default"].createElement("em", props);
    }
  }, "Cheddar cheese");
}
//# sourceMappingURL=CustomReplace.js.map