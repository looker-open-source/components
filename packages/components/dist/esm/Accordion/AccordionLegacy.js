const _excluded = ["children", "contentDomProps", "disclosureProps", "isOpen"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { Children, isValidElement } from 'react';
import { mergeClassNames } from '../utils';
import { AccordionContent } from './AccordionContent';
import { AccordionDisclosure } from './AccordionDisclosure';
export const isLegacyComposition = children => Children.count(children) === 2;
export const AccordionLegacy = _ref => {
  let {
      children,
      contentDomProps,
      disclosureProps,
      isOpen
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const accordionChildren = [];
  Children.forEach(children, child => {
    if (isValidElement(child)) {
      const isAccordionDisclosure = child.type === AccordionDisclosure;
      const isAccordionContent = child.type === AccordionContent;
      if (isAccordionDisclosure) {
        accordionChildren.push(React.cloneElement(child, _objectSpread(_objectSpread({}, disclosureProps), {}, {
          className: mergeClassNames([disclosureProps.className, child.props.className]),
          key: 'accordion-disclosure'
        })));
      } else if (isAccordionContent && isOpen) {
        accordionChildren.push(React.cloneElement(child, _objectSpread(_objectSpread({}, contentDomProps), {}, {
          className: mergeClassNames([child.props.className, contentDomProps.className]),
          key: 'accordion-content'
        })));
      }
    }
  });
  return React.createElement("div", props, accordionChildren);
};
//# sourceMappingURL=AccordionLegacy.js.map