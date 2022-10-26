import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t,
    _t2,
    _t3;

const _excluded = ["border", "children", "isOpen", "itemRole", "label", "defaultOpen", "onBlur", "onClose", "onFocus", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen"],
      _excluded2 = ["indicator", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import { useAccordion2 } from '../Accordion2';
import { Flex } from '../Layout';
import { createSafeRel, HoverDisclosureContext, partitionAriaProps, undefinedCoalesce } from '../utils';
import { List } from '../List';
import { ListItemContext } from '../ListItem';
import { createListItemPartitions } from '../ListItem/utils';
import { TreeContext } from './TreeContext';
import { generateTreeBorder, indicatorDefaults, partitionTreeProps, useTreeHandlers } from './utils';
import { WindowedTreeContext } from './WindowedTreeNode';
import { TreeItemContent } from './TreeItemContent';
import { TreeItem } from './TreeItem';

const TreeLayout = _ref => {
  let {
    border: propsBorder,
    children,
    isOpen: propsIsOpen,
    itemRole = 'none',
    label,
    defaultOpen,
    onBlur,
    onClose,
    onFocus,
    onOpen,
    onMouseEnter,
    onMouseLeave,
    toggleOpen: propsToggleOpen
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

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
    color: propsColor,
    density: propsDensity,
    disabled,
    href,
    icon,
    rel,
    selected,
    target
  } = treeItemInnerProps;
  const [ariaProps] = partitionAriaProps(restProps);
  const listContext = useContext(ListItemContext);
  const treeContext = useContext(TreeContext);
  const {
    density: collectionDensity,
    isOpen: contextIsOpen,
    toggleNode,
    partialRender
  } = useContext(WindowedTreeContext);
  const isOpen = contextIsOpen !== null && contextIsOpen !== void 0 ? contextIsOpen : propsIsOpen;
  const toggleOpen = toggleNode !== null && toggleNode !== void 0 ? toggleNode : propsToggleOpen;
  const border = undefinedCoalesce([propsBorder, treeContext.border]);
  const color = undefinedCoalesce([propsColor, treeContext.color, listContext.color]);
  const startingDepth = 0;
  const depth = treeContext.depth ? treeContext.depth : startingDepth;
  const density = collectionDensity || propsDensity || treeContext.density || 0;
  const {
    indicatorIcons,
    indicatorPosition
  } = indicatorDefaults;
  const [inside, outside] = createListItemPartitions(_objectSpread(_objectSpread({}, treeItemInnerProps), {}, {
    children: label,
    color,
    density,
    icon
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
    density,
    disabled,
    indicatorIcons,
    indicatorPosition,
    label: inside,
    onBlur,
    role: 'treeitem',
    tabIndex: -1
  }, accordionProps));

  const {
    indicator,
    children: disclosureLabel
  } = disclosureProps,
        disclosureDomProps = _objectWithoutProperties(disclosureProps, _excluded2);

  const statefulProps = {
    color,
    disabled,
    hovered,
    selected
  };
  const content = React.createElement(TreeItemContent, _extends({
    "aria-selected": selected,
    depth: depth,
    href: href,
    itemRole: itemRole
  }, contentHandlers, {
    rel: createSafeRel(rel, target),
    ripple: false,
    target: target
  }, ariaProps, disclosureDomProps, statefulProps), indicator, disclosureLabel);
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(TreeContext.Provider, {
    value: {
      border,
      color,
      density,
      depth: depth + 1
    }
  }, React.createElement("div", domProps, !partialRender && React.createElement(Flex, _extends({
    as: "li",
    color: "text5"
  }, wrapperHandlers), content, outside), accordionIsOpen && React.createElement(TreeAccordionContent, _extends({
    border: border,
    density: density,
    depth: depth
  }, contentDomProps)))));
};

const TreeAccordionContent = styled.div.withConfig({
  displayName: "Tree__TreeAccordionContent",
  componentId: "sc-umxml-0"
})(_t || (_t = _`
  ${0}
`), generateTreeBorder);
const dividersCSS = css(_t2 || (_t2 = _`
  ${0} {
    margin-top: 1px;
  }

  & & {
    margin-top: 1px;
  }
`), TreeItem);
export const Tree = styled(TreeLayout).withConfig({
  displayName: "Tree",
  componentId: "sc-umxml-1"
})(_t3 || (_t3 = _`
  ${0}
`), ({
  dividers
}) => dividers && dividersCSS);
//# sourceMappingURL=Tree.js.map