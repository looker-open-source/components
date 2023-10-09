let _ = t => t,
  _t;
const _excluded = ["content", "children", "isOpen", "toggleOpen"],
  _excluded2 = ["children"],
  _excluded3 = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import styled from 'styled-components';
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
    const {
        children: _children1
      } = contentDomProps,
      restContentDomProps = _objectWithoutProperties(contentDomProps, _excluded2);
    const {
        children: _children2
      } = disclosureProps,
      restDisclosureProps = _objectWithoutProperties(disclosureProps, _excluded3);
    return React.createElement(AccordionLegacy, _extends({}, domProps, {
      contentDomProps: restContentDomProps,
      disclosureProps: restDisclosureProps,
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