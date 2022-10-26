"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Span = require("./Span");

var _templateObject;

var Text = (0, _styledComponents["default"])(_Span.Span).attrs(function (_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 'medium' : _ref$fontSize,
      lineHeight = _ref.lineHeight;
  return {
    fontSize: fontSize,
    lineHeight: lineHeight || fontSize
  };
}).withConfig({
  displayName: "Text",
  componentId: "sc-1wcc5y1-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Text = Text;
//# sourceMappingURL=Text.js.map