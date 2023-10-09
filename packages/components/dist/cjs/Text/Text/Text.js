"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Span = require("../Span/Span");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
  componentId: "sc-1d84yfs-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Text = Text;
//# sourceMappingURL=Text.js.map