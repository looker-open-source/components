"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
var _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var size = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    small: {
      fontSize: 'xxsmall',
      lineHeight: '16px',
      px: 'u2'
    },
    medium: {
      fontSize: 'xsmall',
      lineHeight: '24px',
      px: 'u2'
    },
    large: {
      fontSize: 'medium',
      lineHeight: '32px',
      px: 'u3'
    }
  }
});
var BadgeLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement("span", _extends({
    ref: ref
  }, props), children);
});
var badgeIntent = function badgeIntent(intent) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n  "])), (0, _designTokens.intentUIBlend)(intent, 1), function (_ref2) {
    var colors = _ref2.theme.colors;
    return (0, _designTokens.generateIntentShade)(colors[intent]);
  });
};
var Badge = (0, _styledComponents["default"])(BadgeLayout).attrs(function (_ref3) {
  var _ref3$intent = _ref3.intent,
    intent = _ref3$intent === void 0 ? 'key' : _ref3$intent,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 'medium' : _ref3$size;
  return {
    intent: intent,
    size: size
  };
}).withConfig({
  displayName: "Badge",
  componentId: "sc-idhxta-0"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n\n  border-radius:50px;\n  display: inline-flex;\n  font-weight: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.semiBold;
}, _designTokens.color, _designTokens.space, _designTokens.typography, size, function (_ref5) {
  var intent = _ref5.intent;
  return badgeIntent(intent);
});
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map