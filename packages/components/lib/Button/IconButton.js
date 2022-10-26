import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["aria-expanded", "children", "className", "icon", "id", "size", "label", "toggle", "toggleColor", "tooltipDisabled", "tooltipPlacement", "tooltipTextAlign", "tooltipWidth", "onFocus", "onBlur", "onMouseOver", "onMouseOut", "style", "shape"],
      _excluded2 = ["callbacks", "className"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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