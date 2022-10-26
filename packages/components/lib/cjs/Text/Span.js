"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Span = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _TextBase = require("./TextBase");

var _templateObject;

var Span = (0, _styledComponents["default"])(_TextBase.TextBase).attrs(function (_ref) {
  var fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight;
  return {
    lineHeight: lineHeight || fontSize
  };
}).withConfig({
  displayName: "Span",
  componentId: "sc-1ey747b-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _designTokens.textTransform);
exports.Span = Span;
//# sourceMappingURL=Span.js.map