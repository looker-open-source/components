"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBase = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TextBase = _styledComponents["default"].span.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "TextBase",
  componentId: "sc-90l5yt-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.fontFamily, _designTokens.fontSize, _designTokens.fontStyle, _designTokens.fontWeight, _designTokens.letterSpacing, _designTokens.lineHeight, _designTokens.space, _designTokens.textAlign, _designTokens.textColor, _designTokens.textDecoration, function (_ref) {
  var breakword = _ref.breakword;
  return breakword && 'overflow-wrap: break-word;';
});
exports.TextBase = TextBase;
//# sourceMappingURL=TextBase.js.map