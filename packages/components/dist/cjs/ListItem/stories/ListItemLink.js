"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Link;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Link() {
  return _react["default"].createElement(_.ListItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "ListItem that links to Google");
}
//# sourceMappingURL=ListItemLink.js.map