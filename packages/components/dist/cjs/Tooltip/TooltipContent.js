"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipContent = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = require("../Text");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TooltipContent = (0, _styledComponents["default"])(_Text.Paragraph).attrs(function (_ref) {
  var _ref$textAlign = _ref.textAlign,
    textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
    width = _ref.width;
  return {
    color: 'inherit',
    fontSize: 'xsmall',
    lineHeight: 'xsmall',
    m: 'none',
    maxWidth: width || '16rem',
    p: 'u2',
    textAlign: textAlign,
    width: 'auto'
  };
}).withConfig({
  displayName: "TooltipContent",
  componentId: "sc-1fmi5qh-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  hyphens: auto;\n  overflow-wrap: anywhere;\n  text-transform: none;\n  white-space: normal;\n  word-break: break-word;\n"])));
exports.TooltipContent = TooltipContent;
//# sourceMappingURL=TooltipContent.js.map