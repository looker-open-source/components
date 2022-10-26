import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["children", "contentDomProps", "disclosureProps", "isOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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