"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Border;
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Border() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(_.Tree, {
    label: "Border",
    border: true
  }, _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "ID"), _react["default"].createElement(_.TreeItem, null, "Status"), _react["default"].createElement(_.Tree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_.TreeItem, null, "Created Date"), _react["default"].createElement(_.TreeItem, null, "Created Month"), _react["default"].createElement(_.TreeItem, null, "Created Year"), _react["default"].createElement(_.TreeItem, null, "Created Quarter")))));
}
//# sourceMappingURL=Border.js.map