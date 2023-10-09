"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderedList = void 0;
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var typeVariant = (0, _designTokens.variant)({
  prop: 'type',
  variants: {
    letter: {
      listStyleType: 'upper-alpha',
      pl: 'u4'
    },
    none: {
      listStyleType: 'none'
    },
    number: {
      listStyleType: 'decimal',
      pl: 'u4'
    }
  }
});
var OrderedList = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "OrderedList",
  componentId: "sc-csldlu-0"
}).attrs(function (_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'body' : _ref$color,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'none' : _ref$type;
  return {
    as: 'ol',
    color: color,
    type: type
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n\n  li {\n    margin-bottom: ", ";\n  }\n"])), _designTokens.reset, _designTokens.textColor, _designTokens.typography, typeVariant, _designTokens.space, _designTokens.position, _designTokens.layout, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u1;
});
exports.OrderedList = OrderedList;
//# sourceMappingURL=OrderedList.js.map