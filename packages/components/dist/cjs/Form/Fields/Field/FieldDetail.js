"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldDetail = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Text = require("../../../Text");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FieldDetail = (0, _styledComponents["default"])(_Text.Span).attrs(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'inherit' : _ref$color;
  return {
    color: color,
    fontSize: 'xsmall',
    lineHeight: 'xsmall'
  };
}).withConfig({
  displayName: "FieldDetail",
  componentId: "sc-1uti41v-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  white-space: nowrap;\n"])));
exports.FieldDetail = FieldDetail;
//# sourceMappingURL=FieldDetail.js.map