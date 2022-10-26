import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "className", "onClick", "style", "value"],
      _excluded2 = ["callbacks"];
import React, { forwardRef, useContext } from 'react';
import styled from 'styled-components';
import { space, omitStyledProps } from '@looker/design-tokens';
import pick from 'lodash/pick';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { inputHeight } from '../Form/Inputs/height';
import { ButtonSetContext } from './ButtonSetContext';
const ButtonLayout = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    className,
    onClick,
    style,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    disabled,
    value: contextValue,
    onItemClick
  } = useContext(ButtonSetContext);

  function handleClick(e) {
    onClick && onClick(e);

    if (!e.defaultPrevented) {
      onItemClick && onItemClick(e);
    }
  }

  let itemValue = '';

  if (value !== undefined) {
    itemValue = value;
  } else if (typeof children === 'string') {
    itemValue = children;
  }

  let selected = false;

  if (contextValue) {
    if (typeof contextValue === 'string') {
      selected = contextValue === itemValue;
    } else {
      selected = contextValue.includes(itemValue);
    }
  }

  const _useBoundedRipple = useBoundedRipple({
    className,
    color: selected ? 'key' : 'neutral',
    ref: forwardedRef,
    style
  }),
        {
    callbacks
  } = _useBoundedRipple,
        rippleProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(props, rippleHandlerKeys), disabled);
  return React.createElement("button", _extends({
    "aria-pressed": selected,
    onClick: handleClick,
    value: itemValue,
    disabled: disabled,
    type: "button"
  }, omitStyledProps(props), rippleProps, rippleHandlers), children);
});
ButtonLayout.displayName = 'ButtonLayout';
export const ButtonItem = styled(ButtonLayout).withConfig({
  displayName: "ButtonItem",
  componentId: "sc-22szay-0"
})(_t || (_t = _`
  ${0}
  align-items: center;
  background: transparent;
  border: none;
  color: ${0};
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: ${0};
  height: ${0};
  justify-content: center;
  margin: 0;
  padding: 0 ${0};
  transition: background ${0}ms ease;
  user-select: none;

  ${0}

  &:active,
  &:hover {
    background: ${0};
    color: ${0};
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    color: ${0};
    cursor: default;

    &:hover {
      background: inherit;
    }
  }

  &[aria-pressed='true'] {
    background: ${0};
    color: ${0};

    &[disabled] {
      background: ${0};
      color: ${0};
    }

    &:hover {
      border: 1px solid ${0};
    }
  }
`), rippleStyle, ({
  theme
}) => theme.colors.text3, ({
  theme
}) => theme.fontSizes.small, inputHeight, ({
  theme
}) => theme.space.u3, ({
  theme
}) => theme.transitions.quick, space, ({
  theme
}) => theme.colors.neutralSubtle, ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.colors.text1, ({
  theme
}) => theme.colors.keyAccent, ({
  theme
}) => theme.colors.text5, ({
  theme
}) => theme.colors.keySubtle, ({
  theme
}) => theme.colors.keyFocus, ({
  theme
}) => theme.colors.keyInteractive);
//# sourceMappingURL=ButtonItem.js.map