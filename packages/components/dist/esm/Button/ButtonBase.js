const _excluded = ["children", "className", "color", "iconBefore", "iconAfter", "rippleBackgroundColor", "size", "style"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef } from 'react';
import { maxWidth, minWidth, reset, space, shouldForwardProp, width } from '@looker/design-tokens';
import { StyledIconBase } from '@styled-icons/styled-icon';
import styled, { css } from 'styled-components';
import pick from 'lodash/pick';
import { rippleStyle, useBoundedRipple, useRippleHandlers, rippleHandlerKeys } from '../Ripple';
import { buttonSize, buttonIconSizeMap, buttonPadding } from './size';
import { buttonIcon } from './icon';
const buttonCSS = css(_t || (_t = _`
  ${0}
  ${0}
  ${0}
  ${0}

  align-items: center;
  border-radius: ${0};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  font-family: ${0};
  font-weight: ${0};
  justify-content: center;
  line-height: 1;
  outline: none;
  transition: border 80ms;
  vertical-align: middle;
  white-space: nowrap;

  &[disabled],
  &[aria-disabled='true'] {
    cursor: default;
    filter: grayscale(0.3);
    opacity: 0.25;
  }

  ${0}
  ${0}
`), reset, maxWidth, minWidth, width, ({
  theme
}) => theme.radii.medium, ({
  theme
}) => theme.fonts.brand, ({
  theme
}) => theme.fontWeights.medium, buttonSize, space);
export const buttonIconSize = css(_t2 || (_t2 = _`
  ${0} {
    height: ${0};
    width: ${0};
  }
`), StyledIconBase, ({
  theme,
  size: _size = 'medium'
}) => theme.sizes[buttonIconSizeMap[_size]], ({
  theme,
  size: _size2 = 'medium'
}) => theme.sizes[buttonIconSizeMap[_size2]]);
export const ButtonOuter = styled.button.withConfig({
  shouldForwardProp,
  displayName: "ButtonBase__ButtonOuter",
  componentId: "sc-1bpio6j-0"
}).attrs(({
  color: _color = 'key'
}) => ({
  color: _color
}))(_t3 || (_t3 = _`
  ${0}
  ${0}
`), buttonCSS, ({
  fullWidth
}) => fullWidth && `width: 100%;`);
export const ButtonBase = styled(forwardRef((props, forwardedRef) => {
  const {
      children,
      className,
      color,
      iconBefore,
      iconAfter,
      rippleBackgroundColor,
      size = 'medium',
      style
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const _useBoundedRipple = useBoundedRipple({
      className,
      color: rippleBackgroundColor || color || 'key',
      ref: forwardedRef,
      style
    }),
    {
      callbacks
    } = _useBoundedRipple,
    rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);
  const ariaDisabled = restProps['aria-disabled'] && restProps['aria-disabled'] !== 'false';
  const rippleHandlers = useRippleHandlers(callbacks, pick(restProps, rippleHandlerKeys), restProps.disabled || ariaDisabled);
  return React.createElement(ButtonOuter, _extends({
    px: buttonPadding(!!(iconBefore || iconAfter), size)
  }, restProps, rippleProps, rippleHandlers, {
    size: size
  }), iconBefore, children, iconAfter);
})).withConfig({
  displayName: "ButtonBase",
  componentId: "sc-1bpio6j-1"
})(_t4 || (_t4 = _`
  ${0}
  ${0}
  ${0}
`), buttonIcon, buttonIconSize, rippleStyle);
//# sourceMappingURL=ButtonBase.js.map