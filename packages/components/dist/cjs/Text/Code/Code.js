"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TextBase = require("../Text/TextBase");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
  componentId: "sc-3cj3ur-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Code = Code;
//# sourceMappingURL=Code.js.map