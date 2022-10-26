import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["children", "isOpen", "label", "defaultOpen", "onBlur", "onClose", "onFocus", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen"],
      _excluded2 = ["indicator", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import styled from 'styled-components';
import React, { useContext } from 'react';
import { useAccordion2 } from '../Accordion2';
import { HoverDisclosureContext, partitionAriaProps } from '../utils';
import { List } from '../List';
import { createListItemPartitions } from '../ListItem/utils';
import { TreeContext } from '../Tree/TreeContext';
import { generateBorderRadius, indicatorDefaults, partitionTreeProps, useTreeHandlers } from '../Tree/utils';
import { WindowedTreeContext } from '../Tree/WindowedTreeNode';
import { lkFieldItemDensity } from './defaults';
import { LkFieldItem } from './LkFieldItem';
import { LkFieldItemContent } from './LkFieldItemContent';
import { LkFieldItemLabel } from './LkFieldItemLabel';
import { LkFieldTreeAccordionContent } from './LkFieldTreeAccordionContent';
import { LkFieldTreeAccordionDisclosure } from './LkFieldTreeAccordionDisclosure';

const LkFieldTreeLayout = _ref => {
  let {
    children,
    isOpen: propsIsOpen,
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

  const density = lkFieldItemDensity;
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
    color,
    disabled,
    icon,
    selected
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
  const {
    indicatorIcons,
    indicatorPosition
  } = indicatorDefaults;
  const [inside, outside] = createListItemPartitions(_objectSpread(_objectSpread({}, treeItemInnerProps), {}, {
    children: label,
    color,
    density,
    icon,
    truncate: true
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
      windowing: false,
      as: "div"
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
  const content = React.createElement(LkFieldItemContent, _extends({
    "aria-selected": selected,
    depth: depth
  }, ariaProps, contentHandlers, disclosureDomProps, statefulProps), indicator, React.createElement(LkFieldItemLabel, statefulProps, disclosureLabel));
  return React.createElement(HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, React.createElement(TreeContext.Provider, {
    value: {
      density,
      depth: depth + 1
    }
  }, React.createElement("div", domProps, !partialRender && React.createElement(LkFieldTreeAccordionDisclosure, _extends({
    role: "group"
  }, wrapperHandlers), content, outside), accordionIsOpen && React.createElement(LkFieldTreeAccordionContent, contentDomProps))));
};

export const LkFieldTree = styled(LkFieldTreeLayout).withConfig({
  displayName: "LkFieldTree",
  componentId: "sc-10bhy85-0"
})(_t || (_t = _`
  ${0}

  ${0} {
    margin-top: 1px;
  }

  & & {
    margin-top: 1px;
  }
`), ({
  theme
}) => generateBorderRadius('medium', theme), LkFieldItem);
//# sourceMappingURL=LkFieldTree.js.map