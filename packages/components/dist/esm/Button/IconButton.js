const _excluded = ["aria-expanded", "children", "className", "icon", "id", "size", "label", "toggle", "toggleColor", "tooltipDisabled", "tooltipPlacement", "tooltipTextAlign", "tooltipWidth", "onFocus", "onBlur", "onMouseOver", "onMouseOut", "style", "shape"],
  _excluded2 = ["callbacks", "className"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import pick from 'lodash/pick';
import some from 'lodash/some';
import isFunction from 'lodash/isFunction';
import styled from 'styled-components';
import { reset, space } from '@looker/design-tokens';
import React, { forwardRef } from 'react';
import { Icon } from '../Icon';
import { rippleHandlerKeys, rippleStyle, SQUARE_RIPPLE, useRipple, useRippleHandlers } from '../Ripple';
import { useTooltip } from '../Tooltip';
import { mergeClassNames, useWrapEvent } from '../utils';
import { VisuallyHidden } from '../VisuallyHidden';
import { ButtonOuter } from './ButtonBase';
import { iconButtonColor, ICON_BUTTON_DEFAULT_COLOR } from './iconButtonColor';
import { iconButtonOutline } from './iconButtonOutline';
import { iconButtonIconSizeMap, buttonSizeMap } from './size';
export const IconButton = styled(forwardRef((props, forwardedRef) => {
  const {
      'aria-expanded': ariaExpanded,
      children,
      className,
      icon,
      id,
      size = 'xsmall',
      label,
      toggle,
      toggleColor = ICON_BUTTON_DEFAULT_COLOR,
      tooltipDisabled,
      tooltipPlacement,
      tooltipTextAlign,
      tooltipWidth,
      onFocus: propsOnFocus,
      onBlur: propsOnBlur,
      onMouseOver: propsOnMouseOver,
      onMouseOut: propsOnMouseOut,
      style,
      shape
    } = props,
    rest = _objectWithoutProperties(props, _excluded);
  const _useRipple = useRipple({
      bounded: shape === 'square',
      color: toggle ? toggleColor : undefined,
      size: shape === 'square' ? SQUARE_RIPPLE : 1,
      style
    }),
    {
      callbacks,
      className: rippleClassName
    } = _useRipple,
    rippleProps = _objectWithoutProperties(_useRipple, _excluded2);
  const hasOuterTooltip = some([propsOnFocus, propsOnBlur, propsOnMouseOver, propsOnMouseOut], isFunction);
  const {
    domProps: {
      'aria-describedby': ariaDescribedBy,
      className: tooltipClassName = '',
      onFocus,
      onBlur,
      onMouseOver,
      onMouseOut
    },
    tooltip
  } = useTooltip({
    content: label,
    disabled: tooltipDisabled || hasOuterTooltip || ariaExpanded === true,
    id: id ? `${id}-tooltip` : undefined,
    placement: tooltipPlacement,
    textAlign: tooltipTextAlign,
    width: tooltipWidth
  });
  const rippleHandlers = useRippleHandlers(callbacks, _objectSpread({
    onBlur: useWrapEvent(onBlur, propsOnBlur),
    onFocus: useWrapEvent(onFocus, propsOnFocus)
  }, pick(rest, rippleHandlerKeys)), rest.disabled);
  const otherHandlers = {
    onMouseOut: useWrapEvent(onMouseOut, propsOnMouseOut),
    onMouseOver: useWrapEvent(onMouseOver, propsOnMouseOver)
  };
  return React.createElement(ButtonOuter, _extends({
    "aria-describedby": ariaDescribedBy,
    "aria-expanded": ariaExpanded,
    "aria-pressed": toggle ? true : undefined,
    ref: forwardedRef,
    p: "none",
    size: size,
    width: buttonSizeMap[size],
    className: mergeClassNames([className, tooltipClassName, rippleClassName])
  }, rest, rippleProps, rippleHandlers, otherHandlers), React.createElement(VisuallyHidden, null, label), React.createElement(Icon, {
    icon: icon,
    size: iconButtonIconSizeMap[size]
  }), children, tooltip);
})).attrs(({
  type: _type = 'button',
  toggleColor: _toggleColor = ICON_BUTTON_DEFAULT_COLOR
}) => ({
  toggleColor: _toggleColor,
  type: _type
})).withConfig({
  displayName: "IconButton",
  componentId: "sc-n9jti8-0"
})(_t || (_t = _`
  ${0}
  ${0}
  ${0}

  background: none;
  background-color: ${0};
  border: none;
  border-radius: ${0};
  ${0}
  flex-shrink: 0;
  padding: 0;

  ${0}
`), reset, space, rippleStyle, ({
  theme,
  toggle,
  toggleBackground,
  toggleColor
}) => toggle && toggleBackground && theme.colors[`${toggleColor}Subtle`], ({
  shape
}) => shape !== 'square' && '100%', iconButtonColor, ({
  outline
}) => outline && iconButtonOutline);
//# sourceMappingURL=IconButton.js.map