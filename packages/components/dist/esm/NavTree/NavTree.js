const _excluded = ["children", "defaultOpen", "indicatorLabel", "isOpen", "label", "onBlur", "onClick", "onClose", "onFocus", "onKeyUp", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen", "truncate"],
  _excluded2 = ["indicator", "children", "focusVisible", "onBlur", "onClick", "onKeyUp"];
let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
import { NavTreeItemContent } from './NavTreeItem/NavTreeItemContent';
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
      focusVisible: _disclosureFocusVisible,
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