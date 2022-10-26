"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = require("../Text");

var _templateObject;

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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  hyphens: auto;\n  overflow-wrap: anywhere;\n  text-transform: none;\n  white-space: normal;\n  word-break: break-word;\n"])));
exports.TooltipContent = TooltipContent;
//# sourceMappingURL=TooltipContent.js.map