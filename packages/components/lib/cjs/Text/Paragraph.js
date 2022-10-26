"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _truncate = require("../Text/truncate");

var _TextBase = require("./TextBase");

var _templateObject;

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
  componentId: "sc-1nv7vl5-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n"])), _designTokens.layout, _designTokens.textTransform, _truncate.truncateCSS);
exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.js.map