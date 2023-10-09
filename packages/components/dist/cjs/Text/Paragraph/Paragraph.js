"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _truncate = require("../truncate");
var _TextBase = require("../Text/TextBase");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Paragraph = (0, _styledComponents["default"])(_TextBase.TextBase).attrs(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'body' : _ref$color,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 'inherit' : _ref$fontSize,
    lineHeight = _ref.lineHeight;
  return {
    as: 'p',
    color: color,
    fontSize: fontSize,
    lineHeight: lineHeight || fontSize
  };
}).withConfig({
  displayName: "Paragraph",
  componentId: "sc-1dtoraj-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.layout, _designTokens.textTransform, _truncate.truncateCSS);
exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.js.map