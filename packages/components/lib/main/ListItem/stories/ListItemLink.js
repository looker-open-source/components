"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Link;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function Link() {
  return _react["default"].createElement(_.ListItem, {
    itemRole: "link",
    href: "https://google.com",
    target: "_blank"
  }, "ListItem that links to Google");
}
//# sourceMappingURL=ListItemLink.js.map