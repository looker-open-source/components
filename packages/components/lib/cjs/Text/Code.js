"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextBase = require("./TextBase");

var _templateObject;

var Code = (0, _styledComponents["default"])(_TextBase.TextBase).attrs(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text5' : _ref$color,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? 'code' : _ref$fontFamily,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight;
  return {
    as: 'code',
    color: color,
    fontFamily: fontFamily,
    lineHeight: lineHeight || fontSize
  };
}).withConfig({
  displayName: "Code",
  componentId: "sc-1b6zsy0-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.Code = Code;
//# sourceMappingURL=Code.js.map