"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonIconSize = exports.ButtonOuter = exports.ButtonBase = void 0;
var _react = _interopRequireWildcard(require("react"));
var _designTokens = require("@looker/design-tokens");
var _styledIcon = require("@styled-icons/styled-icon");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _pick = _interopRequireDefault(require("lodash/pick"));
var _Ripple = require("../Ripple");
var _size = require("./size");
var _icon = require("./icon");
var _excluded = ["children", "className", "color", "iconBefore", "iconAfter", "rippleBackgroundColor", "size", "style"],
  _excluded2 = ["callbacks"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var buttonCSS = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n\n  align-items: center;\n  border-radius: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  font-family: ", ";\n  font-weight: ", ";\n  justify-content: center;\n  line-height: 1;\n  outline: none;\n  transition: border 80ms;\n  vertical-align: middle;\n  white-space: nowrap;\n\n  &[disabled],\n  &[aria-disabled='true'] {\n    cursor: default;\n    filter: grayscale(0.3);\n    opacity: 0.25;\n  }\n\n  ", "\n  ", "\n"])), _designTokens.reset, _designTokens.maxWidth, _designTokens.minWidth, _designTokens.width, function (_ref) {
  var theme = _ref.theme;
  return theme.radii.medium;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.brand;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontWeights.medium;
}, _size.buttonSize, _designTokens.space);
var buttonIconSize = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", " {\n    height: ", ";\n    width: ", ";\n  }\n"])), _styledIcon.StyledIconBase, function (_ref4) {
  var theme = _ref4.theme,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 'medium' : _ref4$size;
  return theme.sizes[_size.buttonIconSizeMap[size]];
}, function (_ref5) {
  var theme = _ref5.theme,
    _ref5$size = _ref5.size,
    size = _ref5$size === void 0 ? 'medium' : _ref5$size;
  return theme.sizes[_size.buttonIconSizeMap[size]];
});
exports.buttonIconSize = buttonIconSize;
var ButtonOuter = _styledComponents["default"].button.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "ButtonBase__ButtonOuter",
  componentId: "sc-1bpio6j-0"
}).attrs(function (_ref6) {
  var _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? 'key' : _ref6$color;
  return {
    color: color
  };
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), buttonCSS, function (_ref7) {
  var fullWidth = _ref7.fullWidth;
  return fullWidth && "width: 100%;";
});
exports.ButtonOuter = ButtonOuter;
var ButtonBase = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, forwardedRef) {
  var children = props.children,
    className = props.className,
    color = props.color,
    iconBefore = props.iconBefore,
    iconAfter = props.iconAfter,
    rippleBackgroundColor = props.rippleBackgroundColor,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    style = props.style,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
      className: className,
      color: rippleBackgroundColor || color || 'key',
      ref: forwardedRef,
      style: style
    }),
    callbacks = _useBoundedRipple.callbacks,
    rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);
  var ariaDisabled = restProps['aria-disabled'] && restProps['aria-disabled'] !== 'false';
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(restProps, _Ripple.rippleHandlerKeys), restProps.disabled || ariaDisabled);
  return _react["default"].createElement(ButtonOuter, _extends({
    px: (0, _size.buttonPadding)(!!(iconBefore || iconAfter), size)
  }, restProps, rippleProps, rippleHandlers, {
    size: size
  }), iconBefore, children, iconAfter);
})).withConfig({
  displayName: "ButtonBase",
  componentId: "sc-1bpio6j-1"
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), _icon.buttonIcon, buttonIconSize, _Ripple.rippleStyle);
exports.ButtonBase = ButtonBase;
//# sourceMappingURL=ButtonBase.js.map