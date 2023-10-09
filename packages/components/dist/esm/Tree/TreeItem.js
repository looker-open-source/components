const _excluded = ["border", "className", "color", "colorOnHover", "density", "disabled", "href", "itemRole", "labelBackgroundOnly", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "selected", "target"];
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
import React, { forwardRef, useContext, useState } from 'react';
import styled from 'styled-components';
import { Flex } from '../Layout';
import { createListItemPartitions } from '../ListItem/utils';
import { createSafeRel, HoverDisclosureContext, partitionAriaProps, undefinedCoalesce, useWrapEvent } from '../utils';
import { TreeContext } from './TreeContext';
import { TreeItemContent } from './TreeItemContent';
export const TreeItem = styled(forwardRef((_ref, ref) => {
  let {
      border,
      className,
      color: propsColor,
      colorOnHover,
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
    colorOnHover,
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
    ref: ref,
    className: className,
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave
  }, wrapperProps), React.createElement(TreeItemContent, _extends({
    "aria-selected": selected,
    border: border,
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
})).withConfig({
  displayName: "TreeItem",
  componentId: "sc-1dl3fv3-0"
})(_t || (_t = _``));
//# sourceMappingURL=TreeItem.js.map