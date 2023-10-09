"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemPreface = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItemPreface = _styledComponents["default"].p.withConfig({
  displayName: "ListItemPreface",
  componentId: "sc-l8cstm-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n  line-height: ", ";\n  margin: 0;\n"])), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.text2;
}, function (_ref2) {
  var fontSizes = _ref2.theme.fontSizes;
  return fontSizes.xxsmall;
}, function (_ref3) {
  var lineHeights = _ref3.theme.lineHeights;
  return lineHeights.xxsmall;
});
exports.ListItemPreface = ListItemPreface;
//# sourceMappingURL=ListItemPreface.js.map