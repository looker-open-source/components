const _excluded = ["children", "hoverDisclosureRef"],
  _excluded2 = ["onClick", "ref"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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