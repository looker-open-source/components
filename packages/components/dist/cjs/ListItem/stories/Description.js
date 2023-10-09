"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Description;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Description() {
  return _react["default"].createElement(_.ListItem, {
    description: "Description text, which is different than detail text",
    detail: "detail text"
  }, "List Item");
}
//# sourceMappingURL=Description.js.map