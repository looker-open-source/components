import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "hoverDisclosureRef"],
      _excluded2 = ["onClick", "ref"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { forwardRef, isValidElement, cloneElement } from 'react';
import { mergeHandlers, useForkedRef, useHovered } from '../utils';
import { usePopover } from './usePopover';

const isRenderProp = children => typeof children === 'function';

export const popoverPropKeys = ['content', 'onClose', 'placement', 'portalElement', 'pin', 'disableScrollLock', 'triggerElement', 'focusTrap', 'scrollLock', 'surface', 'disabled', 'isOpen', 'canClose', 'setOpen', 'triggerToggle', 'cancelClickOutside', 'hoverDisclosureRef', 'ariaLabel'];
export const Popover = forwardRef((_ref, forwardedRef) => {
  let {
    children,
    hoverDisclosureRef
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    domProps,
    isOpen,
    popover
  } = usePopover(props);

  const {
    onClick,
    ref: popoverRef
  } = domProps,
        restDomProps = _objectWithoutProperties(domProps, _excluded2);

  const ref = useForkedRef(popoverRef, forwardedRef);

  if (isValidElement(children)) {
    children = cloneElement(children, _objectSpread(_objectSpread({}, restDomProps), {}, {
      onClick: mergeHandlers(onClick, children.props.onClick),
      ref
    }));
  } else if (isRenderProp(children)) {
    children = children(domProps);
  } else {
    console.warn(`Element "${typeof children}" can't be used as target for Popover`);
  }

  const [isHovered] = useHovered(hoverDisclosureRef);
  const triggerShown = isHovered || isOpen;
  return React.createElement(React.Fragment, null, popover, triggerShown && children);
});
//# sourceMappingURL=Popover.js.map