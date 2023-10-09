const _excluded = ["className", "children", "color", "colorOnHover", "itemRole", "ripple", "selected", "style"],
  _excluded2 = ["callbacks"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import pick from 'lodash/pick';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { rippleHandlerKeys, rippleStyle, useBoundedRipple, useRippleHandlers } from '../Ripple';
import { isListColor, listItemBackgroundColor, listItemPaddingX } from './utils';
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
      colorOnHover,
      itemRole = 'button',
      ripple = true,
      selected,
      style
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const _useBoundedRipple = useBoundedRipple({
      className,
      color: (selected || colorOnHover) && isListColor(color) ? color : 'neutral',
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