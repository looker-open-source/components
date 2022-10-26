"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _pick = _interopRequireDefault(require("lodash/pick"));

var _Ripple = require("../Ripple");

var _height = require("../Form/Inputs/height");

var _ButtonSetContext = require("./ButtonSetContext");

var _templateObject;

var _excluded = ["children", "className", "onClick", "style", "value"],
    _excluded2 = ["callbacks"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ButtonLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      style = _ref.style,
      value = _ref.value,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_ButtonSetContext.ButtonSetContext),
      disabled = _useContext.disabled,
      contextValue = _useContext.value,
      onItemClick = _useContext.onItemClick;

  function handleClick(e) {
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      onItemClick && onItemClick(e);
    }
  }

  var itemValue = '';

  if (value !== undefined) {
    itemValue = value;
  } else if (typeof children === 'string') {
    itemValue = children;
  }

  var selected = false;

  if (contextValue) {
    if (typeof contextValue === 'string') {
      selected = contextValue === itemValue;
    } else {
      selected = contextValue.includes(itemValue);
    }
  }

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: selected ? 'key' : 'neutral',
    ref: forwardedRef,
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), disabled);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    "aria-pressed": selected,
    onClick: handleClick,
    value: itemValue,
    disabled: disabled,
    type: "button"
  }, (0, _designTokens.omitStyledProps)(props), rippleProps, rippleHandlers), children);
});
ButtonLayout.displayName = 'ButtonLayout';
var ButtonItem = (0, _styledComponents["default"])(ButtonLayout).withConfig({
  displayName: "ButtonItem",
  componentId: "sc-22szay-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  align-items: center;\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: ", ";\n  height: ", ";\n  justify-content: center;\n  margin: 0;\n  padding: 0 ", ";\n  transition: background ", "ms ease;\n  user-select: none;\n\n  ", "\n\n  &:active,\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &[disabled] {\n    color: ", ";\n    cursor: default;\n\n    &:hover {\n      background: inherit;\n    }\n  }\n\n  &[aria-pressed='true'] {\n    background: ", ";\n    color: ", ";\n\n    &[disabled] {\n      background: ", ";\n      color: ", ";\n    }\n\n    &:hover {\n      border: 1px solid ", ";\n    }\n  }\n"])), _Ripple.rippleStyle, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text3;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
}, _height.inputHeight, function (_ref4) {
  var theme = _ref4.theme;
  return theme.space.u3;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.transitions.quick;
}, _designTokens.space, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.neutralSubtle;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.text5;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.text1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.keyAccent;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.text5;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.keySubtle;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.keyFocus;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.keyInteractive;
});
exports.ButtonItem = ButtonItem;
//# sourceMappingURL=ButtonItem.js.map