"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerBase = exports.Divider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _designTokens = require("@looker/design-tokens");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

var appearanceVariant = (0, _designTokens.variant)({
  prop: 'appearance',
  variants: {
    dark: {
      bg: 'ui4'
    },
    "default": {
      bg: 'ui3'
    },
    light: {
      bg: 'ui2'
    },
    onDark: {
      bg: 'text2'
    }
  }
});

var DividerBase = _styledComponents["default"].hr.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Divider__DividerBase",
  componentId: "sc-1ceogl5-0"
}).attrs(function (_ref) {
  var _ref$appearance = _ref.appearance,
      appearance = _ref$appearance === void 0 ? 'default' : _ref$appearance,
      customColor = _ref.customColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? '1px' : _ref$size;
  return {
    appearance: appearance,
    'aria-orientation': 'horizontal',
    bg: customColor,
    role: 'separator',
    size: size
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  border: none;\n  margin: 0; /* reset <hr /> built-in margin */\n  ", "\n\n  ", "\n"])), _designTokens.reset, _designTokens.position, _designTokens.space, function (_ref2) {
  var customColor = _ref2.customColor;
  return customColor ? _designTokens.color : appearanceVariant;
});

exports.DividerBase = DividerBase;
var Divider = (0, _styledComponents["default"])(DividerBase).withConfig({
  displayName: "Divider",
  componentId: "sc-1ceogl5-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", ";\n  width: 100%;\n"])), function (_ref3) {
  var size = _ref3.size;
  return size;
});
exports.Divider = Divider;
//# sourceMappingURL=Divider.js.map