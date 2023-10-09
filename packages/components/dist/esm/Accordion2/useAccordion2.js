const _excluded = ["children", "className", "density", "disabled", "label", "id", "indicatorPosition", "indicatorIcons", "defaultOpen", "isOpen", "onBlur", "onClick", "onClose", "onOpen", "onKeyUp", "role", "tabIndex", "toggleOpen"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState } from 'react';
import { useClickable, useWrapEvent } from '../utils';
import { Accordion2Content } from './Accordion2Content';
import { accordionDefaults, accordionLeftDefaults } from './accordionDefaults';
import { AccordionIndicator } from './AccordionIndicator';
import { useAriaLabelObjectRelationship } from './useAriaLabelObjectRelationship';
export const useAccordion2 = _ref => {
  let {
      children,
      className,
      density = accordionDefaults.density,
      disabled,
      label,
      id,
      indicatorPosition,
      indicatorIcons = indicatorPosition === 'left' ? accordionLeftDefaults.indicatorIcons : accordionDefaults.indicatorIcons,
      defaultOpen = false,
      isOpen: propsIsOpen,
      onBlur,
      onClick: propsOnClick,
      onClose,
      onOpen,
      onKeyUp,
      role,
      tabIndex = 0,
      toggleOpen: propsToggleOpen
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [value, setValue] = useState(defaultOpen);
  const toggle = () => setValue(!value);
  const isOpen = propsIsOpen !== undefined ? propsIsOpen : value;
  const onClick = useWrapEvent(() => {
    isOpen ? onClose && onClose() : onOpen && onOpen();
    propsToggleOpen !== undefined ? propsToggleOpen(!isOpen) : toggle();
  }, propsOnClick);
  const clickableProps = useClickable({
    disabled,
    onBlur,
    onClick,
    onKeyUp,
    role
  });
  const [labelProps, objectProps] = useAriaLabelObjectRelationship(id);
  const domProps = _objectSpread(_objectSpread({}, props), {}, {
    className: `${isOpen ? 'open' : 'closed'} ${className}`,
    id
  });
  const indicator = React.createElement(AccordionIndicator, {
    density: density,
    indicatorPosition: indicatorPosition
  }, isOpen ? indicatorIcons.open : indicatorIcons.close);
  const disclosureProps = _objectSpread(_objectSpread({}, labelProps), {}, {
    'aria-expanded': isOpen,
    children: label,
    className: clickableProps.focusVisible ? 'focusVisible ' : undefined,
    density,
    indicator,
    indicatorPosition,
    tabIndex
  }, clickableProps);
  const contentDomProps = _objectSpread(_objectSpread({}, objectProps), {}, {
    children,
    role: 'region'
  });
  const content = isOpen && React.createElement(Accordion2Content, contentDomProps);
  return {
    content,
    contentDomProps,
    disclosureProps,
    domProps,
    isOpen
  };
};
//# sourceMappingURL=useAccordion2.js.map