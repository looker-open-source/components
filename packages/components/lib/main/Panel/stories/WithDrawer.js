"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithDrawer;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../Layout");
var _ = require("..");
var _Drawer = require("../../Drawer");
var _Text = require("../../Text");
var _Button = require("../../Button");

function WithDrawer() {
  return _react["default"].createElement(_Drawer.Drawer, {
    placement: "left",
    content: _react["default"].createElement(_.Panels, null, _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_.Panel, {
      defaultOpen: true,
      direction: "right",
      title: "Some title",
      content: "Tree should be hidden"
    }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text")))
  }, _react["default"].createElement(_Button.Button, null, "Open Drawer"));
}
//# sourceMappingURL=WithDrawer.js.map