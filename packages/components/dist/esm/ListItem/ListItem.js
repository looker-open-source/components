let _ = t => t,
  _t;
const _excluded = ["children", "className", "color", "colorOnHover", "density", "description", "detail", "disabled", "hovered", "href", "icon", "itemRole", "onBlur", "onClick", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "role", "selected", "tabIndex", "target", "truncate"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import styled from 'styled-components';
import React, { forwardRef, useContext, useRef, useState } from 'react';
import { createSafeRel, HoverDisclosureContext, partitionAriaProps, undefinedCoalesce, useWrapEvent, useForkedRef } from '../utils';
import { IconPlaceholder } from '../Icon';
import { ListItemContext } from './ListItemContext';
import { ListItemContent } from './ListItemContent';
import { ListItemWrapper } from './ListItemWrapper';
import { createListItemPartitions, listItemLabelColor } from './utils';
const ListItemInternal = forwardRef((props, ref) => {
  const {
      children: _children,
      className,
      color: propsColor,
      colorOnHover,
      density: propsDensity,
      description: _description,
      detail,
      disabled = false,
      hovered: propsHovered = false,
      href,
      icon,
      itemRole,
      onBlur,
      onClick,
      onKeyDown,
      onKeyUp,
      onMouseEnter,
      onMouseLeave,
      rel,
      ripple = true,
      role,
      selected,
      tabIndex = -1,
      target,
      truncate: _truncate
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  const {
    density: contextDensity,
    iconGutter,
    color: contextColor
  } = useContext(ListItemContext);
  const density = propsDensity || contextDensity;
  const color = undefinedCoalesce([propsColor, contextColor]);
  const [hovered, setHovered] = useState(propsHovered);
  const handleOnClick = event => {
    if (itemRole !== 'none' && onClick) {
      onClick(event);
    }
  };
  if (disabled && itemRole === 'link') {
    console.warn('itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem');
  }
  if (itemRole === 'none' && onClick) {
    console.warn('itemRole="none" and onClick cannot be combined - if itemRole="none" is a necessity, assign click behavior directly to ListItem\'s children');
  }
  const wrapperRef = useRef(null);
  const actualRef = useForkedRef(wrapperRef, ref);
  const [ariaProps, wrapperProps] = partitionAriaProps(restProps);
  const [insideElements, outsideElements] = createListItemPartitions(_objectSpread(_objectSpread({}, props), {}, {
    color,
    density,
    detail,
    icon: icon || (iconGutter ? React.createElement(IconPlaceholder, null) : undefined)
  }));
  const statefulProps = {
    color,
    colorOnHover,
    disabled,
    hovered,
    ripple,
    selected
  };
  const handleWrapperFocus = () => {
    setHovered(true);
  };
  const handleWrapperBlur = event => {
    const nextFocusTarget = event.relatedTarget;
    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };
  const handleWrapperMouseEnter = useWrapEvent(() => setHovered(true), onMouseEnter);
  const handleWrapperMouseLeave = useWrapEvent(() => setHovered(false), onMouseLeave);
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(ListItemWrapper, _extends({
    className: className,
    color: listItemLabelColor(color, disabled),
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave,
    ref: actualRef
  }, wrapperProps), React.createElement(ListItemContent, _extends({
    itemRole: itemRole,
    "aria-selected": selected,
    cursorPointer: !!(href || onClick),
    href: href,
    onClick: disabled ? undefined : handleOnClick,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    density: density,
    rel: createSafeRel(rel, target),
    role: role || 'listitem',
    target: target,
    tabIndex: tabIndex
  }, ariaProps, statefulProps), insideElements), outsideElements));
});
export const ListItem = styled(ListItemInternal).withConfig({
  displayName: "ListItem",
  componentId: "sc-1n26s38-0"
})(_t || (_t = _``));
//# sourceMappingURL=ListItem.js.map