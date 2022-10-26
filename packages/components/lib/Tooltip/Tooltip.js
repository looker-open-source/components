import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["aria-controls", "aria-expanded", "aria-haspopup", "disabled", "onClick", "children"],
      _excluded2 = ["className", "onBlur", "onFocus", "onMouseOut", "onMouseOver"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { cloneElement, forwardRef, isValidElement } from 'react';
import { mergeClassNames, useWrapEvent } from '../utils';
import { useTooltip } from './useTooltip';

function isRenderProp(children) {
  return typeof children === 'function';
}

const noop = () => {};

export const Tooltip = forwardRef((_ref, _) => {
  let {
    'aria-controls': ariaControls,
    'aria-expanded': ariaExpanded,
    'aria-haspopup': ariaHaspopup,
    disabled,
    onClick,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    domProps,
    tooltip
  } = useTooltip(_objectSpread({
    disabled: disabled || ariaExpanded
  }, props));

  const {
    className,
    onBlur,
    onFocus,
    onMouseOut,
    onMouseOver
  } = domProps,
        restDomProps = _objectWithoutProperties(domProps, _excluded2);

  let target = children;
  const childProps = isValidElement(children) ? children.props : undefined;
  const wrappedHandlers = {
    onBlur: useWrapEvent(onBlur, childProps === null || childProps === void 0 ? void 0 : childProps.onBlur),
    onClick: useWrapEvent(onClick || noop, childProps === null || childProps === void 0 ? void 0 : childProps.onClick),
    onFocus: useWrapEvent(onFocus, childProps === null || childProps === void 0 ? void 0 : childProps.onFocus),
    onMouseOut: useWrapEvent(onMouseOut, childProps === null || childProps === void 0 ? void 0 : childProps.onMouseOut),
    onMouseOver: useWrapEvent(onMouseOver, childProps === null || childProps === void 0 ? void 0 : childProps.onMouseOver)
  };

  if (isValidElement(children)) {
    target = cloneElement(children, _objectSpread(_objectSpread(_objectSpread({}, wrappedHandlers), restDomProps), {}, {
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHaspopup,
      className: mergeClassNames([className, children.props.className])
    }));
  } else if (isRenderProp(children)) {
    target = children(domProps);
  } else {
    console.warn(`Element "${typeof target}" can't be used as target for Tooltip`);
  }

  return React.createElement(React.Fragment, null, tooltip, target);
});
//# sourceMappingURL=Tooltip.js.map