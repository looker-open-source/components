"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CenterPlacement;
var _react = _interopRequireDefault(require("react"));
var _Layout = require("../../Layout");
var _ = require("..");
var _Text = require("../../Text");
var _Button = require("../../Button");

function CenterPlacement() {
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true,
    height: "100vh"
  }, _react["default"].createElement(_Layout.Aside, {
    width: "navigation"
  }, "Left sidebar"), _react["default"].createElement(_Layout.Layout, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_.Panel, {
    title: "Some title",
    content: _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_.Panel, {
      title: "Another title",
      direction: "right",
      content: _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"), _react["default"].createElement(_Text.Paragraph, null, "Some other text"))
    }, _react["default"].createElement(_Button.Button, null, "Open Another Panel")), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"), _react["default"].createElement(_Text.Paragraph, null, "Some text"))
  }, _react["default"].createElement(_Button.Button, null, "Open Panel")), _react["default"].createElement(_Text.Paragraph, null, "Content to be covered by the panel"))), _react["default"].createElement(_Layout.Aside, {
    width: "sidebar"
  }, "Right sidebar")));
}
//# sourceMappingURL=CenterPlacement.js.map