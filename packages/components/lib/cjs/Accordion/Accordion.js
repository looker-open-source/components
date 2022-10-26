"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _designTokens = require("@looker/design-tokens");

var _simple = require("../Layout/utils/simple");

var _useAccordion2 = require("../Accordion2/useAccordion2");

var _accordionDimensions = require("../Accordion2/accordionDimensions");

var _AccordionLegacy = require("./AccordionLegacy");

var _AccordionDisclosure = require("./AccordionDisclosure");

var _AccordionContent = require("./AccordionContent");

var _templateObject;

var _excluded = ["content", "children", "isOpen", "toggleOpen"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var AccordionInternal = function AccordionInternal(_ref) {
  var children = _ref.content,
      label = _ref.children,
      propsIsOpen = _ref.isOpen,
      propsToggleOpen = _ref.toggleOpen,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  if (propsIsOpen && propsToggleOpen === undefined || propsIsOpen === undefined && propsToggleOpen) {
    console.warn('Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.');
  }

  if (!label) {
    console.warn("<Accordion>'s child is falsy (i.e. undefined, null, false, etc). Please give <Accordion> a valid ReactNode child.");
  }

  var controlledProps = propsIsOpen && propsToggleOpen ? {
    isOpen: propsIsOpen,
    toggleOpen: propsToggleOpen
  } : {};

  var _useAccordion = (0, _useAccordion2.useAccordion2)(_objectSpread(_objectSpread({
    children: children,
    label: label
  }, controlledProps), props)),
      contentDomProps = _useAccordion.contentDomProps,
      domProps = _useAccordion.domProps,
      disclosureProps = _useAccordion.disclosureProps,
      isOpen = _useAccordion.isOpen;

  if ((0, _AccordionLegacy.isLegacyComposition)(label)) {
    return _react["default"].createElement(_AccordionLegacy.AccordionLegacy, (0, _extends2["default"])({}, domProps, {
      contentDomProps: (0, _omit["default"])(contentDomProps, 'children'),
      disclosureProps: (0, _omit["default"])(disclosureProps, 'children'),
      isOpen: isOpen
    }), label);
  } else {
    return _react["default"].createElement("div", domProps, _react["default"].createElement(_AccordionDisclosure.AccordionDisclosure, disclosureProps), isOpen && _react["default"].createElement(_AccordionContent.AccordionContent, contentDomProps));
  }
};

var Accordion = (0, _styledComponents["default"])(AccordionInternal).withConfig({
  displayName: "Accordion",
  componentId: "sc-egrkwf-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  width: 100%;\n\n  ", ", ", " {\n    ", "\n    ", "\n    ", "\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme,
      density = _ref2.density;
  return theme.fontSizes[(0, _accordionDimensions.accordionDimensions)(density || theme.defaults.density).fontSize];
}, _AccordionDisclosure.AccordionDisclosure, _AccordionContent.AccordionContent, _designTokens.textColor, _simple.simpleLayoutCSS, _designTokens.typography);
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map