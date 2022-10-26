"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconButtonColor = exports.ICON_BUTTON_DEFAULT_COLOR = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _designTokens = require("@looker/design-tokens");

var _templateObject;

var ICON_BUTTON_DEFAULT_COLOR = 'key';
exports.ICON_BUTTON_DEFAULT_COLOR = ICON_BUTTON_DEFAULT_COLOR;
var iconButtonColor = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  &:hover,\n  &:focus,\n  &.hover {\n    color: ", ";\n  }\n\n  &[aria-expanded='true'],\n  &:active,\n  &.active {\n    color: ", ";\n  }\n\n  &[aria-pressed='true'] {\n    color: ", ";\n  }\n"])), _designTokens.iconButtonColorDerivation, function (_ref) {
  var theme = _ref.theme;
  return theme.colors.neutralInteractive;
}, function (_ref2) {
  var theme = _ref2.theme,
      toggle = _ref2.toggle,
      toggleColor = _ref2.toggleColor;
  return toggle !== undefined ? theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR] : theme.colors.neutralPressed;
}, function (_ref3) {
  var theme = _ref3.theme,
      toggleColor = _ref3.toggleColor;
  return theme.colors[toggleColor || ICON_BUTTON_DEFAULT_COLOR];
});
exports.iconButtonColor = iconButtonColor;
//# sourceMappingURL=iconButtonColor.js.map