import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5,
    _t6,
    _t7;

const _excluded = ["autoResize", "children", "className", "before", "iconBefore", "after", "iconAfter", "type", "noErrorIcon", "validationType", "onClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver", "onMouseUp"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import omit from 'lodash/omit';
import { omitStyledProps, space, reset, layout } from '@looker/design-tokens';
import React, { forwardRef, useRef } from 'react';
import styled, { css } from 'styled-components';
import { targetIsButton, useForkedRef, useWrapEvent } from '../../../utils';
import { DISABLED_OPACITY } from '../../constants';
import { InlineInputTextBase } from '../InlineInputText';
import { inputPropKeys, pickInputProps } from '../InputProps';
import { innerInputStyle } from '../innerInputStyle';
import { inputHeight } from '../height';
import { After } from './After';
import { Before } from './Before';
const InputComponent = forwardRef((_ref, forwardedRef) => {
  let {
    autoResize,
    children,
    className,
    before,
    iconBefore,
    after,
    iconAfter,
    type = 'text',
    noErrorIcon,
    validationType,
    onClick,
    onMouseDown,
    onMouseEnter,
    onMouseLeave,
    onMouseOut,
    onMouseOver,
    onMouseUp
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const internalRef = useRef(null);
  const ref = useForkedRef(internalRef, forwardedRef);

  const handleMouseDown = e => {
    if (!targetIsButton(e) && e.target !== internalRef.current) {
      if (document.activeElement === internalRef.current) {
        e.preventDefault();
      } else {
        setTimeout(() => {
          internalRef.current && internalRef.current.focus();
        }, 0);
      }
    }
  };

  const onMouseDownWrapped = useWrapEvent(handleMouseDown, onMouseDown);

  if (before && iconBefore) {
    console.warn('Use before or iconBefore, but not both at the same time.');
    return null;
  }

  if (after && iconAfter) {
    console.warn('Use after or iconAfter, but not both at the same time.');
    return null;
  }

  const mouseHandlers = {
    onClick,
    onMouseDown: onMouseDownWrapped,
    onMouseEnter,
    onMouseLeave,
    onMouseOut,
    onMouseOver,
    onMouseUp
  };

  const inputProps = _objectSpread(_objectSpread({}, pickInputProps(omitStyledProps(props))), {}, {
    'aria-invalid': validationType === 'error' ? true : undefined,
    type
  });

  let inner = React.createElement(StyledInput, _extends({}, inputProps, {
    ref: ref
  }));

  if (children) {
    inner = React.createElement("div", {
      className: "inner"
    }, children, React.createElement(StyledInput, _extends({}, inputProps, {
      ref: ref
    })));
  } else if (autoResize) {
    inner = React.createElement(InlineInputTextBase, _extends({}, inputProps, {
      ref: ref
    }));
  }

  return React.createElement("div", _extends({
    className: className
  }, mouseHandlers, omitStyledProps(omit(props, inputPropKeys))), React.createElement(Before, {
    before: before,
    iconBefore: iconBefore
  }), inner, React.createElement(After, {
    after: after,
    iconAfter: iconAfter,
    noErrorIcon: noErrorIcon,
    validationType: validationType
  }));
});
InputComponent.displayName = 'InputComponent';
const StyledInput = styled.input.withConfig({
  displayName: "InputText__StyledInput",
  componentId: "sc-6cvg1f-0"
})(_t || (_t = _`
  ${0}
  flex: 1;
  font-size: ${0};
  max-width: 100%;
  min-width: 2rem;
  padding: 0 ${0};
`), innerInputStyle, ({
  theme
}) => theme.fontSizes.small, ({
  theme: {
    space
  }
}) => space.u2);
export const inputTextHover = css(_t2 || (_t2 = _`
  border-color: ${0};
`), ({
  theme
}) => theme.colors.ui4);
export const inputTextFocus = css(_t3 || (_t3 = _`
  border-color: ${0};
  box-shadow: inset 0 0 0 1px ${0};
  outline: none;
`), ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.key);
export const inputTextDisabled = css(_t4 || (_t4 = _`
  cursor: default;
  opacity: ${0};
  &:hover {
    border-color: ${0};
  }
  /* FloatingLabelField handles opacity */
  [data-disabled='true'] & {
    opacity: 1;
  }
`), DISABLED_OPACITY, ({
  theme
}) => theme.colors.ui3);
export const inputTextValidation = css(_t5 || (_t5 = _`
  ${0}
`), props => props.validationType === 'error' ? `
      border-color: ${props.theme.colors.critical};
      &:hover {
        border-color: ${props.theme.colors.critical};
      }
      &:focus,
      &:focus-within {
        border-color: ${props.theme.colors.critical};
        box-shadow: inset 0 0 0 1px ${props.theme.colors.critical};
      }
      input {
        caret-color: ${props.theme.colors.critical};
      }
      ` : '');
export const inputCSS = css(_t6 || (_t6 = _`
  background: ${0};
  border: 1px solid ${0};
  border-radius: ${0};
  color: ${0};
  font-size: ${0};
`), ({
  theme: {
    colors
  }
}) => colors.field, ({
  theme: {
    colors
  }
}) => colors.ui3, ({
  theme: {
    radii
  }
}) => radii.medium, ({
  theme: {
    colors
  }
}) => colors.text5, ({
  theme: {
    fontSizes
  }
}) => fontSizes.small);
export const InputText = styled(InputComponent).attrs(({
  height: _height = inputHeight,
  type: _type = 'text'
}) => ({
  height: _height,
  type: _type
})).withConfig({
  displayName: "InputText",
  componentId: "sc-6cvg1f-1"
})(_t7 || (_t7 = _`
  ${0}

  align-items: center;
  color: ${0};
  cursor: text;
  display: inline-flex;
  justify-content: space-evenly;
  padding: ${0};
  width: ${0};

  ${0}
  ${0}
  ${0}

  ${0} {
    height: 100%;
    max-width: 100%;
    width: 100%;
    input,
    span {
      padding: 0 ${0};
    }
  }

  &:hover {
    ${0}
  }
  &:focus,
  &:focus-within {
    ${0}
  }
  ${0}
  ${0}
`), reset, ({
  theme
}) => theme.colors.text, ({
  theme: {
    space
  }
}) => `${space.u05} ${space.u1}`, ({
  autoResize
}) => autoResize ? 'auto' : '100%', layout, space, inputCSS, InlineInputTextBase, ({
  theme
}) => theme.space.u2, inputTextHover, inputTextFocus, ({
  disabled
}) => disabled ? inputTextDisabled : '', inputTextValidation);
//# sourceMappingURL=InputText.js.map