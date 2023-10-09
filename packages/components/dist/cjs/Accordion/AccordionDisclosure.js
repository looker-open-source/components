"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionDisclosure = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _simple = require("../Layout/utils/simple");
var _Accordion2Disclosure = require("../Accordion2/Accordion2Disclosure");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var AccordionDisclosureInternal = function AccordionDisclosureInternal(props) {
  return _react["default"].createElement(_Accordion2Disclosure.Accordion2Disclosure, _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), _designTokens.typography, _simple.simpleLayoutCSS);
exports.AccordionDisclosure = AccordionDisclosure;
//# sourceMappingURL=AccordionDisclosure.js.map