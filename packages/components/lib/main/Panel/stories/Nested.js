"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Nested;
var _react = _interopRequireDefault(require("react"));
var _List = require("../../List");
var _ListItem = require("../../ListItem");
var _Layout = require("../../Layout");
var _ = require("..");
var _Button = require("../../Button");
var _Text = require("../../Text");

function Nested() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "12rem"
  }, _react["default"].createElement(_Button.Button, null, "Before"), _react["default"].createElement(_.Panels, null, _react["default"].createElement(_List.List, null, _react["default"].createElement(_.Panel, {
    title: "Panel Title",
    content: _react["default"].createElement(_.Panel, {
      content: "Nested Panel content",
      title: "Nested"
    }, _react["default"].createElement(_Button.Button, null, "Open nested panel"))
  }, _react["default"].createElement(_ListItem.ListItem, null, "option A")), _react["default"].createElement(_ListItem.ListItem, null, "option B"), _react["default"].createElement(_ListItem.ListItem, null, "option C"), _react["default"].createElement(_ListItem.ListItem, null, "option D")))), _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_Text.Paragraph, null, "Main stuff here..."), _react["default"].createElement(_Button.Button, null, "After")));
}
//# sourceMappingURL=Nested.js.map