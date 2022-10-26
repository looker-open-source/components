"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButtonOutline = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject;

var iconButtonOutline = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid ", ";\n\n  &:hover,\n  &:focus,\n  &.hover {\n    border-color: ", ";\n  }\n\n  &[aria-expanded='true'],\n  &:active,\n  &.active {\n    border-color: ", ";\n  }\n\n  &[disabled] {\n    &:hover,\n    &:active,\n    &:focus {\n      border-color: ", ";\n    }\n  }\n"])), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.ui3;
}, function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.neutral;
}, function (_ref3) {
  var colors = _ref3.theme.colors;
  return colors.neutralInteractive;
}, function (_ref4) {
  var colors = _ref4.theme.colors;
  return colors.ui3;
});
exports.iconButtonOutline = iconButtonOutline;
//# sourceMappingURL=iconButtonOutline.js.map