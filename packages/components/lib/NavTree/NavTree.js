import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "defaultOpen", "indicatorLabel", "isOpen", "label", "onBlur", "onClick", "onClose", "onFocus", "onKeyUp", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen", "truncate"],
      _excluded2 = ["indicator", "children", "focusVisible", "onBlur", "onClick", "onKeyUp"];

let _ = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';
import { ArrowRight } from '@styled-icons/material/ArrowRight';
import styled from 'styled-components';
import React, { cloneElement, useContext } from 'react';
import { partitionTreeProps, useTreeHandlers } from '../Tree/utils';
import { listItemDimensions } from '../ListItem';
import { TreeContext } from '../Tree/TreeContext';
import { useAccordion2 } from '../Accordion2';
import { createSafeRel, HoverDisclosureContext, partitionAriaProps, useWrapEvent } from '../utils';
import { List } from '../List';
import { AccordionIndicator } from '../Accordion2/AccordionIndicator';
import { createListItemPartitions } from '../ListItem/utils';
import { WindowedTreeContext } from '../Tree/WindowedTreeNode';
import { NavTreeDisclosure } from './NavTreeDisclosure';
import { NavTreeItemContent } from './NavTreeItemContent';
export const INDICATOR_SPACER = '8px';
export const NavTree = styled(_ref => {
  let {
    children,
    defaultOpen,
    indicatorLabel,
    isOpen: propsIsOpen,
    label,
    onBlur,
    onClick,
    onClose,
    onFocus,
    onKeyUp,
    onOpen,
    onMouseEnter,
    onMouseLeave,
    toggleOpen: propsToggleOpen,
    truncate = true
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const isIndicatorToggleOnly = !!restProps.href;
  const [treeItemInnerProps, accordionInnerProps] = partitionTreeProps(restProps);
  const {
    hovered,
    contentHandlers,
    wrapperHandlers
  } = useTreeHandlers({
    onFocus,
    onMouseEnter,
    onMouseLeave
  });
  const {
    disabled,
    href,
    icon,
    rel,
    selected,
    target
  } = treeItemInnerProps;
  const [ariaProps] = partitionAriaProps(restProps);
  const treeContext = useContext(TreeContext);
  const {
    isOpen: contextIsOpen,
    toggleNode,
    partialRender
  } = useContext(WindowedTreeContext);
  const isOpen = contextIsOpen !== null && contextIsOpen !== void 0 ? contextIsOpen : propsIsOpen;
  const toggleOpen = toggleNode !== null && toggleNode !== void 0 ? toggleNode : propsToggleOpen;
  const startingDepth = 0;
  const depth = treeContext.depth ? treeContext.depth : startingDepth;
  const [inside, outside] = createListItemPartitions(_objectSpread(_objectSpread({}, treeItemInnerProps), {}, {
    children: label,
    icon,
    truncate
  }));

  let accordionProps = _objectSpread({
    defaultOpen,
    onClose,
    onOpen
  }, accordionInnerProps);

  if (isOpen !== undefined && toggleOpen) {
    accordionProps = _objectSpread(_objectSpread({}, accordionProps), {}, {
      isOpen,
      toggleOpen
    });
  }

  const {
    contentDomProps,
    domProps,
    disclosureProps,
    isOpen: accordionIsOpen
  } = useAccordion2(_objectSpread({
    'aria-selected': selected,
    children: React.createElement(List, {
      disableKeyboardNav: true,
      role: "group",
      windowing: false
    }, children),
    disabled,
    indicatorIcons: {
      close: React.createElement(ArrowRight, {
        "aria-label": `${indicatorLabel} Close`
      }),
      open: React.createElement(ArrowDropDown, {
        "aria-label": `${indicatorLabel} Open`
      })
    },
    indicatorPosition: 'left',
    label: inside,
    onBlur,
    role: 'treeitem',
    tabIndex: -1
  }, accordionProps));

  const {
    indicator,
    children: disclosureLabel,
    focusVisible: disclosureFocusVisible,
    onBlur: onBlurDisclosureToggle,
    onClick: onClickDisclosureToggle,
    onKeyUp: onKeyUpDisclosureToggle
  } = disclosureProps,
        disclosureDomProps = _objectWithoutProperties(disclosureProps, _excluded2);

  const indicatorToggleOnlyProps = {
    onBlur: onBlurDisclosureToggle,
    onClick: onClickDisclosureToggle,
    onKeyUp: onKeyUpDisclosureToggle,
    tabIndex: -1
  };
  const renderedIndicator = cloneElement(indicator, _objectSpread({}, isIndicatorToggleOnly ? indicatorToggleOnlyProps : undefined));
  const handleContentBlur = useWrapEvent(event => {
    if (!isIndicatorToggleOnly && onBlurDisclosureToggle) onBlurDisclosureToggle(event);
  });
  const handleContentClick = useWrapEvent(event => {
    if (!isIndicatorToggleOnly && onClickDisclosureToggle) onClickDisclosureToggle(event);
  }, onClick);
  const handleContentKeyUp = useWrapEvent(event => {
    if (!isIndicatorToggleOnly && onKeyUpDisclosureToggle) onKeyUpDisclosureToggle(event);
  });
  const statefulProps = {
    color: 'key',
    disabled,
    hovered,
    ripple: true,
    selected
  };
  const content = React.createElement(React.Fragment, null, isIndicatorToggleOnly && renderedIndicator, React.createElement(NavTreeItemContent, _extends({
    "aria-selected": selected,
    href: href,
    itemRole: isIndicatorToggleOnly ? 'link' : 'none',
    onBlur: handleContentBlur,
    onClick: handleContentClick,
    onKeyUp: handleContentKeyUp,
    rel: createSafeRel(rel, target),
    ripple: false,
    target: target
  }, ariaProps, contentHandlers, disclosureDomProps), !isIndicatorToggleOnly && renderedIndicator, disclosureLabel));
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(TreeContext.Provider, {
    value: {
      color: statefulProps.color,
      depth: depth + 1
    }
  }, React.createElement("div", domProps, !partialRender && React.createElement(NavTreeDisclosure, _extends({
    depth: depth
  }, wrapperHandlers, statefulProps), content, outside), accordionIsOpen && React.createElement("div", contentDomProps))));
}).withConfig({
  displayName: "NavTree",
  componentId: "sc-1ynatxb-0"
})(_t || (_t = _`
  ${0} {
    padding-left: ${0};
    ${0}
  }
`), AccordionIndicator, INDICATOR_SPACER, ({
  icon,
  theme
}) => !icon && `margin-right: ${theme.space[listItemDimensions(theme.defaults.density).gap]};`);
//# sourceMappingURL=NavTree.js.map