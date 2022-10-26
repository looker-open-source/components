import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "children", "color", "itemRole", "ripple", "selected", "style"],
      _excluded2 = ["callbacks"];

let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4,
    _t5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pick from 'lodash/pick';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { listItemColorOptions } from './types';
import { listItemBackgroundColor, listItemPaddingX } from './utils';
const Button = styled.button.attrs(({
  type: _type = 'button'
}) => ({
  type: _type
})).withConfig({
  displayName: "ListItemContent__Button",
  componentId: "sc-1ietpwm-0"
})(_t || (_t = _`
  font-family: inherit;
`));
const Link = styled.a.withConfig({
  displayName: "ListItemContent__Link",
  componentId: "sc-1ietpwm-1"
})(_t2 || (_t2 = _``));
const Div = styled.div.withConfig({
  displayName: "ListItemContent__Div",
  componentId: "sc-1ietpwm-2"
})(_t3 || (_t3 = _``));
export const listItemContentCSS = style => css(_t4 || (_t4 = _`
  > ${0}, > ${0}, > ${0} {
    ${0}
  }
`), Button, Link, Div, style);
export const listItemLabelCSS = listItemContentCSS;
export const ListItemContent = styled(forwardRef((_ref, forwardedRef) => {
  let {
    className,
    children,
    color,
    itemRole = 'button',
    ripple = true,
    selected,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const _useBoundedRipple = useBoundedRipple({
    className,
    color: selected && listItemColorOptions.includes(color) ? color : 'neutral',
    ref: forwardedRef,
    style
  }),
        {
    callbacks
  } = _useBoundedRipple,
        rippleRestProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);

  const rippleHandlers = useRippleHandlers(callbacks, pick(props, rippleHandlerKeys), props.disabled);
  const rippleProps = ripple ? _objectSpread(_objectSpread({}, rippleRestProps), rippleHandlers) : {
    className,
    style
  };

  if (!props.disabled && itemRole === 'link') {
    return React.createElement(Link, _extends({
      ref: forwardedRef
    }, props, rippleProps), children);
  } else if (itemRole === 'none') {
    return React.createElement(Div, _extends({
      ref: forwardedRef
    }, props, rippleProps), children);
  }

  return React.createElement(Button, _extends({
    ref: forwardedRef
  }, props, rippleProps, {
    type: "button"
  }), children);
})).withConfig({
  displayName: "ListItemContent",
  componentId: "sc-1ietpwm-3"
})(_t5 || (_t5 = _`
  ${0}
  ${0}

  align-items: center;
  border: none;
  color: inherit;
  cursor: ${0};
  display: flex;
  flex: 1;
  font-size: inherit;
  font-weight: inherit;
  margin: 0; /* safari has default margin */
  min-width: 0;
  outline: none;

  padding: 0; /* Remove default top and bottom padding */
  ${0}

  /*
    Supports absolutely positioned box-shadow
  */
  position: relative;

  text-align: left;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`), listItemBackgroundColor, rippleStyle, ({
  cursorPointer
}) => cursorPointer ? 'pointer' : undefined, ({
  density
}) => listItemPaddingX(density));
//# sourceMappingURL=ListItemContent.js.map