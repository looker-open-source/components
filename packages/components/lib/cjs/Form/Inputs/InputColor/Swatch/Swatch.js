"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Swatch = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var emptySwatch = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  &::after {\n    /* stylelint-disable-next-line */\n    background: red;\n    content: '';\n    display: block;\n    height: 1px;\n    position: absolute;\n    top: 50%;\n    transform: rotate(-45deg);\n    width: 100%;\n  }\n"])));

var Swatch = _styledComponents["default"].div.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "Swatch",
  componentId: "sc-1ldlx27-0"
}).attrs(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'transparent' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xsmall' : _ref$size;
  return {
    color: color,
    'data-testid': 'swatch',
    size: size
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n   ", "\n \n   ", "\n   ", "\n   background-color: ", ";\n   border: 1px solid ", ";\n   border-radius: 50%;\n   cursor: ", ";\n \n   ", "\n \n   &:hover {\n     border: 1px solid ", ";\n   }\n "])), _designTokens.reset, _designTokens.size, _designTokens.space, function (_ref2) {
  var color = _ref2.color;
  return color;
}, function (_ref3) {
  var colors = _ref3.theme.colors;
  return colors.ui3;
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return !disabled && 'pointer';
}, function (_ref5) {
  var color = _ref5.color;
  return color === 'transparent' && emptySwatch;
}, function (_ref6) {
  var colors = _ref6.theme.colors;
  return colors.ui4;
});

exports.Swatch = Swatch;
//# sourceMappingURL=Swatch.js.map