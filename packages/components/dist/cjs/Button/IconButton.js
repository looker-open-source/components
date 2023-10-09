"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;
var _pick = _interopRequireDefault(require("lodash/pick"));
var _some = _interopRequireDefault(require("lodash/some"));
var _isFunction = _interopRequireDefault(require("lodash/isFunction"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../Icon");
var _Ripple = require("../Ripple");
var _Tooltip = require("../Tooltip");
var _utils = require("../utils");
var _VisuallyHidden = require("../VisuallyHidden");
var _ButtonBase = require("./ButtonBase");
var _iconButtonColor = require("./iconButtonColor");
var _iconButtonOutline = require("./iconButtonOutline");
var _size = require("./size");
var _excluded = ["aria-expanded", "children", "className", "icon", "id", "size", "label", "toggle", "toggleColor", "tooltipDisabled", "tooltipPlacement", "tooltipTextAlign", "tooltipWidth", "onFocus", "onBlur", "onMouseOver", "onMouseOut", "style", "shape"],
  _excluded2 = ["callbacks", "className"];
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IconButton = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, forwardedRef) {
  var ariaExpanded = props['aria-expanded'],
    children = props.children,
    className = props.className,
    icon = props.icon,
    id = props.id,
    _props$size = props.size,
    size = _props$size === void 0 ? 'xsmall' : _props$size,
    label = props.label,
    toggle = props.toggle,
    _props$toggleColor = props.toggleColor,
    toggleColor = _props$toggleColor === void 0 ? _iconButtonColor.ICON_BUTTON_DEFAULT_COLOR : _props$toggleColor,
    tooltipDisabled = props.tooltipDisabled,
    tooltipPlacement = props.tooltipPlacement,
    tooltipTextAlign = props.tooltipTextAlign,
    tooltipWidth = props.tooltipWidth,
    propsOnFocus = props.onFocus,
    propsOnBlur = props.onBlur,
    propsOnMouseOver = props.onMouseOver,
    propsOnMouseOut = props.onMouseOut,
    style = props.style,
    shape = props.shape,
    rest = _objectWithoutProperties(props, _excluded);
  var _useRipple = (0, _Ripple.useRipple)({
      bounded: shape === 'square',
      color: toggle ? toggleColor : undefined,
      size: shape === 'square' ? _Ripple.SQUARE_RIPPLE : 1,
      style: style
    }),
    callbacks = _useRipple.callbacks,
    rippleClassName = _useRipple.className,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  var hasOuterTooltip = (0, _some["default"])([propsOnFocus, propsOnBlur, propsOnMouseOver, propsOnMouseOut], _isFunction["default"]);
  var _useTooltip = (0, _Tooltip.useTooltip)({
      content: label,
      disabled: tooltipDisabled || hasOuterTooltip || ariaExpanded === true,
      id: id ? "".concat(id, "-tooltip") : undefined,
      placement: tooltipPlacement,
      textAlign: tooltipTextAlign,
      width: tooltipWidth
    }),
    _useTooltip$domProps = _useTooltip.domProps,
    ariaDescribedBy = _useTooltip$domProps['aria-describedby'],
    _useTooltip$domProps$ = _useTooltip$domProps.className,
    tooltipClassName = _useTooltip$domProps$ === void 0 ? '' : _useTooltip$domProps$,
    onFocus = _useTooltip$domProps.onFocus,
    onBlur = _useTooltip$domProps.onBlur,
    onMouseOver = _useTooltip$domProps.onMouseOver,
    onMouseOut = _useTooltip$domProps.onMouseOut,
    tooltip = _useTooltip.tooltip;
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, _objectSpread({
    onBlur: (0, _utils.useWrapEvent)(onBlur, propsOnBlur),
    onFocus: (0, _utils.useWrapEvent)(onFocus, propsOnFocus)
  }, (0, _pick["default"])(rest, _Ripple.rippleHandlerKeys)), rest.disabled);
  var otherHandlers = {
    onMouseOut: (0, _utils.useWrapEvent)(onMouseOut, propsOnMouseOut),
    onMouseOver: (0, _utils.useWrapEvent)(onMouseOver, propsOnMouseOver)
  };
  return _react["default"].createElement(_ButtonBase.ButtonOuter, _extends({
    "aria-describedby": ariaDescribedBy,
    "aria-expanded": ariaExpanded,
    "aria-pressed": toggle ? true : undefined,
    ref: forwardedRef,
    p: "none",
    size: size,
    width: _size.buttonSizeMap[size],
    className: (0, _utils.mergeClassNames)([className, tooltipClassName, rippleClassName])
  }, rest, rippleProps, rippleHandlers, otherHandlers), _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, label), _react["default"].createElement(_Icon.Icon, {
    icon: icon,
    size: _size.iconButtonIconSizeMap[size]
  }), children, tooltip);
})).attrs(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$toggleColor = _ref.toggleColor,
    toggleColor = _ref$toggleColor === void 0 ? _iconButtonColor.ICON_BUTTON_DEFAULT_COLOR : _ref$toggleColor;
  return {
    toggleColor: toggleColor,
    type: type
  };
}).withConfig({
  displayName: "IconButton",
  componentId: "sc-n9jti8-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n\n  background: none;\n  background-color: ", ";\n  border: none;\n  border-radius: ", ";\n  ", "\n  flex-shrink: 0;\n  padding: 0;\n\n  ", "\n"])), _designTokens.reset, _designTokens.space, _Ripple.rippleStyle, function (_ref2) {
  var theme = _ref2.theme,
    toggle = _ref2.toggle,
    toggleBackground = _ref2.toggleBackground,
    toggleColor = _ref2.toggleColor;
  return toggle && toggleBackground && theme.colors["".concat(toggleColor, "Subtle")];
}, function (_ref3) {
  var shape = _ref3.shape;
  return shape !== 'square' && '100%';
}, _iconButtonColor.iconButtonColor, function (_ref4) {
  var outline = _ref4.outline;
  return outline && _iconButtonOutline.iconButtonOutline;
});
exports.IconButton = IconButton;
//# sourceMappingURL=IconButton.js.map