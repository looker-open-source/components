"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionDisclosure = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _simple = require("../Layout/utils/simple");

var _Accordion2Disclosure = require("../Accordion2/Accordion2Disclosure");

var _templateObject;

var AccordionDisclosureInternal = function AccordionDisclosureInternal(props) {
  return _react["default"].createElement(_Accordion2Disclosure.Accordion2Disclosure, (0, _extends2["default"])({
    focusVisible: false,
    indicator: null
  }, props));
};

var AccordionDisclosure = (0, _styledComponents["default"])(AccordionDisclosureInternal).attrs(function (_ref) {
  var _ref$px = _ref.px,
      px = _ref$px === void 0 ? 'none' : _ref$px,
      _ref$py = _ref.py,
      py = _ref$py === void 0 ? 'xsmall' : _ref$py;
  return {
    px: px,
    py: py
  };
}).withConfig({
  displayName: "AccordionDisclosure",
  componentId: "sc-8407zi-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"])), _designTokens.typography, _simple.simpleLayoutCSS);
exports.AccordionDisclosure = AccordionDisclosure;
//# sourceMappingURL=AccordionDisclosure.js.map