"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2;

var _excluded = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement("span", (0, _extends2["default"])({
    ref: ref
  }, props), children);
});

var badgeIntent = function badgeIntent(intent) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    background: ", ";\n    color: ", ";\n  "])), (0, _designTokens.intentUIBlend)(intent, 1), function (_ref2) {
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
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  border-radius:50px;\n  display: inline-flex;\n  font-weight: ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), _designTokens.reset, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeights.semiBold;
}, _designTokens.color, _designTokens.space, _designTokens.typography, size, function (_ref5) {
  var intent = _ref5.intent;
  return badgeIntent(intent);
});
exports.Badge = Badge;
//# sourceMappingURL=Badge.js.map