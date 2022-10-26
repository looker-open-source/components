import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "className", "density", "disabled", "label", "id", "indicatorPosition", "indicatorIcons", "defaultOpen", "isOpen", "onBlur", "onClick", "onClose", "onOpen", "onKeyUp", "role", "tabIndex", "toggleOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    className,
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