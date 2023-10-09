"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BorderRadiusOverride;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ = require("..");
var _generateBorderRadius = require("../utils/generateBorderRadius");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BorderRadiusOverrideTree = (0, _styledComponents["default"])(_.Tree).withConfig({
  displayName: "BorderRadiusOverride__BorderRadiusOverrideTree",
  componentId: "sc-t6hraz-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return (0, _generateBorderRadius.generateBorderRadius)('medium', theme);
});
function BorderRadiusOverride() {
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
}
//# sourceMappingURL=BorderRadiusOverride.js.map