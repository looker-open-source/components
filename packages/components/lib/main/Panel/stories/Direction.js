"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Direction;
var _react = _interopRequireDefault(require("react"));
var _List = require("../../List");
var _ListItem = require("../../ListItem");
var _Layout = require("../../Layout");
var _ = require("..");

function Direction() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "12rem"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_.Panel, {
    content: 'content from Right...',
    title: 'Right',
    defaultOpen: true,
    direction: 'right'
  }, _react["default"].createElement(_ListItem.ListItem, null, "option A")), _react["default"].createElement(_.Panel, {
    content: 'content from Left...',
    direction: 'left',
    defaultOpen: true,
    title: "Left"
  }, _react["default"].createElement(_ListItem.ListItem, null, "Left")), _react["default"].createElement(_ListItem.ListItem, null, "option C"), _react["default"].createElement(_ListItem.ListItem, null, "option D")))), _react["default"].createElement(_Layout.Section, null, "Main stuff here..."));
}
//# sourceMappingURL=Direction.js.map