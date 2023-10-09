"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Span = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _TextBase = require("../Text/TextBase");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Span = (0, _styledComponents["default"])(_TextBase.TextBase).attrs(function (_ref) {
  var fontSize = _ref.fontSize,
    lineHeight = _ref.lineHeight;
  return {
    lineHeight: lineHeight || fontSize
  };
}).withConfig({
  displayName: "Span",
  componentId: "sc-1e8sfe6-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _designTokens.textTransform);
exports.Span = Span;
//# sourceMappingURL=Span.js.map