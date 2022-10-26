"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileTreeClosed = exports.FileTree = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _materialOutlined = require("@styled-icons/material-outlined");

var _Tree = require("../Tree");

var _TreeCollection = require("../TreeCollection");

var _TreeItem = require("../TreeItem");

var Template = function Template(args) {
  return _react["default"].createElement(_TreeCollection.TreeCollection, null, _react["default"].createElement(_Tree.Tree, (0, _extends2["default"])({}, args, {
    label: _react["default"].createElement("strong", null, "thelook"),
    icon: _react["default"].createElement(_materialOutlined.Explore, null)
  }), _react["default"].createElement(_Tree.Tree, {
    label: "Users",
    icon: _react["default"].createElement(_materialOutlined.Visibility, null),
    defaultOpen: true
  }, _react["default"].createElement(_Tree.Tree, {
    label: "Orders",
    icon: _react["default"].createElement(_materialOutlined.TableChart, null),
    defaultOpen: true
  }, _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "ID"), _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "Status"), _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "Created")), _react["default"].createElement(_Tree.Tree, {
    label: "Users",
    icon: _react["default"].createElement(_materialOutlined.TableChart, null),
    defaultOpen: true
  }, _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "ID"), _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "Name"), _react["default"].createElement(_TreeItem.TreeItem, {
    icon: _react["default"].createElement(_material.TextSnippet, null)
  }, "Created")))));
};

var FileTree = Template.bind({});
exports.FileTree = FileTree;
FileTree.args = {
  defaultOpen: true
};
var FileTreeClosed = Template.bind({});
exports.FileTreeClosed = FileTreeClosed;
FileTreeClosed.args = {};
//# sourceMappingURL=FileTree.js.map