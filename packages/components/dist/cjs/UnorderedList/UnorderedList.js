"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnorderedList = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var typeVariant = (0, _designTokens.variant)({
  prop: 'type',
  variants: {
    bullet: {
      listStyleType: 'disc',
      pl: 'u4'
    },
    none: {
      listStyleType: 'none'
    }
  }
});
var UnorderedList = _styledComponents["default"].ul.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "UnorderedList",
  componentId: "sc-qnps5j-0"
}).attrs(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'body' : _ref$color,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'none' : _ref$type;
  return {
    color: color,
    type: type
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n\n  li {\n    margin-bottom: ", ";\n  }\n"])), _designTokens.reset, _designTokens.textColor, _designTokens.typography, typeVariant, _designTokens.space, _designTokens.position, _designTokens.layout, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u1;
});
exports.UnorderedList = UnorderedList;
//# sourceMappingURL=UnorderedList.js.map