import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "className", "color", "density", "description", "detail", "disabled", "hovered", "href", "icon", "itemRole", "onBlur", "onClick", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "role", "selected", "tabIndex", "target", "truncate"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    children,
    className,
    color: propsColor,
    density: propsDensity,
    description,
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
    truncate
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
ListItemInternal.displayName = 'ListItemInternal';
export const ListItem = styled(ListItemInternal).withConfig({
  displayName: "ListItem",
  componentId: "sc-1n26s38-0"
})(_t || (_t = _``));
//# sourceMappingURL=ListItem.js.map