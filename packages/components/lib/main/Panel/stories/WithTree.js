"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithTree;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../Layout");
var _ = require("..");
var _Button = require("../../Button");
var _Tree = require("../../Tree");

function WithTree() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_.Panel, {
    title: "Some title",
    content: "Tree should be hidden"
  }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Tree.TreeCollection, null, _react["default"].createElement(_Tree.Tree, {
    label: _react["default"].createElement("strong", null, "Orders"),
    defaultOpen: true
  }, _react["default"].createElement(_Tree.TreeItem, null, "ID"), _react["default"].createElement(_Tree.TreeItem, null, "Status"), _react["default"].createElement(_Tree.Tree, {
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true
  }, _react["default"].createElement(_Tree.TreeItem, null, "Created Date"), _react["default"].createElement(_Tree.TreeItem, null, "Created Month"), _react["default"].createElement(_Tree.TreeItem, null, "Created Year"), _react["default"].createElement(_Tree.TreeItem, null, "Created Quarter")))))), _react["default"].createElement(_Layout.Section, null, "Main content"));
}
//# sourceMappingURL=WithTree.js.map