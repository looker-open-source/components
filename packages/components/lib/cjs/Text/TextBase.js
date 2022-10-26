"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBase = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject;

var TextBase = _styledComponents["default"].span.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TextBase",
  componentId: "sc-1sjok63-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.fontFamily, _designTokens.fontSize, _designTokens.fontStyle, _designTokens.fontWeight, _designTokens.letterSpacing, _designTokens.lineHeight, _designTokens.space, _designTokens.textAlign, _designTokens.textColor, _designTokens.textDecoration, function (_ref) {
  var breakword = _ref.breakword;
  return breakword && 'overflow-wrap: break-word;';
});

exports.TextBase = TextBase;
//# sourceMappingURL=TextBase.js.map