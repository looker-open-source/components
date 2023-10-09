"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Table = _styledComponents["default"].table.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Table",
  componentId: "sc-1x77f3i-0"
}).attrs(function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? '100%' : _ref$width;
  return {
    width: width
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  border-collapse: collapse;\n  color: ", ";\n"])), _designTokens.reset, _designTokens.space, _designTokens.layout, _designTokens.border, function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.text5;
});
exports.Table = Table;
//# sourceMappingURL=Table.js.map