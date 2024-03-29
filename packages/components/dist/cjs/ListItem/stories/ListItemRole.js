"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Role;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../");
var _2 = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Role() {
  return _react["default"].createElement(_.List, null, _react["default"].createElement(_2.ListItem, {
    itemRole: "button",
    description: "Definitely a button"
  }, "List Item"), _react["default"].createElement(_2.ListItem, {
    itemRole: "link",
    description: "Definitely a link"
  }, "List Item"), _react["default"].createElement(_2.ListItem, {
    itemRole: "none",
    description: "Definitely a none"
  }, "List Item"));
}
//# sourceMappingURL=ListItemRole.js.map