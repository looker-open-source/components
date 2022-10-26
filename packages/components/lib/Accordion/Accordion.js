import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

let _ = t => t,
    _t;

const _excluded = ["content", "children", "isOpen", "toggleOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';
import { textColor, typography } from '@looker/design-tokens';
import { simpleLayoutCSS } from '../Layout/utils/simple';
import { useAccordion2 } from '../Accordion2/useAccordion2';
import { accordionDimensions } from '../Accordion2/accordionDimensions';
import { AccordionLegacy, isLegacyComposition } from './AccordionLegacy';
import { AccordionDisclosure } from './AccordionDisclosure';
import { AccordionContent } from './AccordionContent';

const AccordionInternal = _ref => {
  let {
    content: children,
    children: label,
    isOpen: propsIsOpen,
    toggleOpen: propsToggleOpen
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  if (propsIsOpen && propsToggleOpen === undefined || propsIsOpen === undefined && propsToggleOpen) {
    console.warn('Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.');
  }

  if (!label) {
    console.warn("<Accordion>'s child is falsy (i.e. undefined, null, false, etc). Please give <Accordion> a valid ReactNode child.");
  }

  const controlledProps = propsIsOpen && propsToggleOpen ? {
    isOpen: propsIsOpen,
    toggleOpen: propsToggleOpen
  } : {};
  const {
    contentDomProps,
    domProps,
    disclosureProps,
    isOpen
  } = useAccordion2(_objectSpread(_objectSpread({
    children,
    label
  }, controlledProps), props));

  if (isLegacyComposition(label)) {
    return React.createElement(AccordionLegacy, _extends({}, domProps, {
      contentDomProps: omit(contentDomProps, 'children'),
      disclosureProps: omit(disclosureProps, 'children'),
      isOpen: isOpen
    }), label);
  } else {
    return React.createElement("div", domProps, React.createElement(AccordionDisclosure, disclosureProps), isOpen && React.createElement(AccordionContent, contentDomProps));
  }
};

export const Accordion = styled(AccordionInternal).withConfig({
  displayName: "Accordion",
  componentId: "sc-egrkwf-0"
})(_t || (_t = _`
  font-size: ${0};
  width: 100%;

  ${0}, ${0} {
    ${0}
    ${0}
    ${0}
  }
`), ({
  theme,
  density
}) => theme.fontSizes[accordionDimensions(density || theme.defaults.density).fontSize], AccordionDisclosure, AccordionContent, textColor, simpleLayoutCSS, typography);
//# sourceMappingURL=Accordion.js.map