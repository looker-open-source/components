let _ = t => t,
  _t,
  _t2,
  _t3;
const _excluded = ["border", "children", "isOpen", "itemRole", "label", "defaultOpen", "onBlur", "onClose", "onFocus", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen"],
  _excluded2 = ["indicator", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import styled, { css } from 'styled-components';
import React, { forwardRef, useContext } from 'react';
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
const TreeLayout = forwardRef((_ref, ref) => {
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
  const toggleOpen = open => {
    toggleNode === null || toggleNode === void 0 ? void 0 : toggleNode(open);
    propsToggleOpen === null || propsToggleOpen === void 0 ? void 0 : propsToggleOpen(open);
  };
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
  }, wrapperHandlers, {
    ref: ref
  }), content, outside), accordionIsOpen && React.createElement(TreeAccordionContent, _extends({
    border: border,
    density: density,
    depth: depth
  }, contentDomProps)))));
});
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