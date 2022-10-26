"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ParentIcon = exports.Link = exports.Basic = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@styled-icons/material");

var _storybook = require("@looker/storybook");

var _NavList = require("../NavList");

var _NavTree = require("./NavTree");

var _NavTreeItem = require("./NavTreeItem");

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _NavTree.NavTree,
  title: 'NavTree'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_NavTree.NavTree, args, _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    parentIcon: true
  }, "Cheddar")));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  defaultOpen: true,
  icon: _react["default"].createElement(_material.Folder, null),
  label: 'Cheeses'
};

var Link = function Link() {
  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Click me to go to Google",
    icon: _react["default"].createElement(_material.Folder, null),
    href: "https://google.com",
    target: "_blank",
    indicatorLabel: "Google Link Indicator"
  }, _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    href: "https://google.com",
    target: "_blank",
    parentIcon: true
  }, "Some Item")));
};

exports.Link = Link;

var ParentIcon = function ParentIcon() {
  return _react["default"].createElement(_NavList.NavList, null, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Parent Tree with Icon",
    icon: _react["default"].createElement(_material.Folder, null)
  }, _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    parentIcon: true
  }, "Cheddar"), _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    parentIcon: true
  }, "Cheddar 2"), _react["default"].createElement(_NavTreeItem.NavTreeItem, {
    parentIcon: true
  }, "Cheddar 3")), _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Grandparent Tree with Icon",
    icon: _react["default"].createElement(_material.Folder, null)
  }, _react["default"].createElement(_NavTree.NavTree, {
    defaultOpen: true,
    label: "Parent Tree with No Icon"
  }, _react["default"].createElement(_NavTreeItem.NavTreeItem, null, "Swiss"), _react["default"].createElement(_NavTreeItem.NavTreeItem, null, "Swiss 2"), _react["default"].createElement(_NavTreeItem.NavTreeItem, null, "Swiss 3"))));
};

exports.ParentIcon = ParentIcon;
//# sourceMappingURL=NavTree.stories.js.map