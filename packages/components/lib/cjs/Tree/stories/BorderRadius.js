"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderRadiusOverride = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ = require("..");

var _generateBorderRadius = require("../utils/generateBorderRadius");

var _templateObject;

var BorderRadiusOverrideTree = (0, _styledComponents["default"])(_.Tree).withConfig({
  displayName: "BorderRadius__BorderRadiusOverrideTree",
  componentId: "sc-168pfgu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return (0, _generateBorderRadius.generateBorderRadius)('medium', theme);
});

var BorderRadiusOverride = function BorderRadiusOverride() {
  return _react["default"].createElement(_.TreeCollection, null, _react["default"].createElement(BorderRadiusOverrideTree, {
    selected: true,
    label: _react["default"].createElement("strong", null, "Created"),
    defaultOpen: true,
    dividers: true
  }, _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Created Date"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Created Month"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Created Year"), _react["default"].createElement(_.TreeItem, {
    selected: true
  }, "Created Quarter")));
};

exports.BorderRadiusOverride = BorderRadiusOverride;
//# sourceMappingURL=BorderRadius.js.map