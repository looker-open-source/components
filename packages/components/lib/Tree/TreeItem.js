import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "color", "density", "disabled", "href", "itemRole", "labelBackgroundOnly", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "selected", "target"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../Layout';
import { createListItemPartitions } from '../ListItem/utils';
import { createSafeRel, HoverDisclosureContext, partitionAriaProps, undefinedCoalesce, useWrapEvent } from '../utils';
import { TreeContext } from './TreeContext';
import { TreeItemContent } from './TreeItemContent';
export const TreeItem = styled(_ref => {
  let {
    className,
    color: propsColor,
    density: propsDensity,
    disabled,
    href,
    itemRole,
    labelBackgroundOnly: propsLabelBackgroundOnly,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    rel,
    ripple = false,
    selected,
    target
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const {
    density: contextDensity,
    depth,
    color: contextColor
  } = useContext(TreeContext);
  const [hovered, setHovered] = useState(false);
  const handleWrapperMouseEnter = useWrapEvent(() => setHovered(true), onMouseEnter);
  const handleWrapperMouseLeave = useWrapEvent(() => setHovered(false), onMouseLeave);

  const handleWrapperFocus = () => setHovered(true);

  const handleWrapperBlur = event => {
    const nextFocusTarget = event.relatedTarget;

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };

  const density = undefinedCoalesce([propsDensity, contextDensity]);
  const color = undefinedCoalesce([propsColor, contextColor]);
  const statefulProps = {
    color,
    disabled,
    hovered,
    ripple,
    selected
  };
  const [ariaProps, wrapperProps] = partitionAriaProps(restProps);
  const [inside, outside] = createListItemPartitions(_objectSpread(_objectSpread({
    density
  }, restProps), statefulProps));
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(Flex, _extends({
    as: "li",
    className: className,
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave
  }, wrapperProps), React.createElement(TreeItemContent, _extends({
    "aria-selected": selected,
    density: density,
    depth: depth + 1,
    href: href,
    itemRole: itemRole,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    rel: createSafeRel(rel, target),
    tabIndex: -1,
    target: target
  }, ariaProps, statefulProps), inside), outside));
}).withConfig({
  displayName: "TreeItem",
  componentId: "sc-1dl3fv3-0"
})(_t || (_t = _``));
//# sourceMappingURL=TreeItem.js.map