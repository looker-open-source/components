import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["className", "color", "disabled", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "selected"],
      _excluded2 = ["focusVisible"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../Layout';
import { createListItemPartitions } from '../ListItem/utils';
import { HoverDisclosureContext, partitionAriaProps, useFocusVisible, useWrapEvent } from '../utils';
import { TreeContext } from '../Tree/TreeContext';
import { LkFieldItemContent } from './LkFieldItemContent';
import { LkFieldItemLabel } from './LkFieldItemLabel';
import { lkFieldItemDensity } from './defaults';
export const LkFieldItem = styled(_ref => {
  let {
    className,
    color,
    disabled,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    onMouseEnter,
    onMouseLeave,
    selected
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const {
    depth
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

  const _useFocusVisible = useFocusVisible({
    onBlur,
    onKeyUp
  }),
        {
    focusVisible
  } = _useFocusVisible,
        focusVisibleHandlers = _objectWithoutProperties(_useFocusVisible, _excluded2);

  const statefulProps = {
    color,
    disabled,
    hovered,
    selected
  };
  const [ariaProps, wrapperProps] = partitionAriaProps(restProps);
  const [inside, outside] = createListItemPartitions(_objectSpread(_objectSpread({
    density: lkFieldItemDensity
  }, restProps), statefulProps));
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(Flex, _extends({
    role: "group",
    className: className,
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave
  }, wrapperProps), React.createElement(LkFieldItemContent, _extends({
    "aria-selected": selected,
    depth: depth + 1,
    role: "treeitem",
    focusVisible: focusVisible,
    onClick: onClick,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    tabIndex: -1
  }, ariaProps, focusVisibleHandlers, statefulProps), React.createElement(LkFieldItemLabel, statefulProps, inside)), outside));
}).withConfig({
  displayName: "LkFieldItem",
  componentId: "sc-bwajwd-0"
})(_t || (_t = _``));
//# sourceMappingURL=LkFieldItem.js.map