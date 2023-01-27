"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Open;
var _react = _interopRequireDefault(require("react"));
var _List = require("../../List");
var _ListItem = require("../../ListItem");
var _Layout = require("../../Layout");
var _ = require("..");

function Open() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "12rem"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_.Panel, {
    content: 'Panel Content',
    title: 'Panel Title',
    defaultOpen: true
  }, _react["default"].createElement(_ListItem.ListItem, null, "option A")), _react["default"].createElement(_ListItem.ListItem, null, "option B"), _react["default"].createElement(_ListItem.ListItem, null, "option C"), _react["default"].createElement(_ListItem.ListItem, null, "option D")))), _react["default"].createElement(_Layout.Section, null, "Main stuff here..."));
}
//# sourceMappingURL=Open.js.map