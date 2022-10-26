"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion2Disclosure = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _utils = require("../utils");

var _AccordionLabel = require("./AccordionLabel");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["children", "indicator", "indicatorPosition"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Accordion2DisclosureInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      indicator = _ref.indicator,
      indicatorPosition = _ref.indicatorPosition,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    ref: ref
  }, props), indicatorPosition === 'left' && indicator, _react["default"].createElement(_AccordionLabel.AccordionLabel, null, children), indicatorPosition !== 'left' && indicator);
});
Accordion2DisclosureInternal.displayName = 'Accordion2DisclosureInternal';
var labelTypographyDefaults = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: ", ";\n  text-align: left;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeights.semiBold;
});
var Accordion2Disclosure = (0, _styledComponents["default"])(Accordion2DisclosureInternal).withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['indicator', 'indicatorPosition'].includes(prop) ? true : (0, _designTokens.shouldForwardProp)(prop);
  },
  displayName: "Accordion2Disclosure",
  componentId: "sc-n100ke-0"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  outline: none;\n  position: relative;\n  width: 100%;\n\n  ", "\n\n  &[disabled] {\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text5;
}, labelTypographyDefaults, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text1;
}, (0, _utils.focusVisibleCSSWrapper)(function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      box-shadow: inset 0 0 0 2px ", ";\n    "])), theme.colors.keyFocus);
}));
exports.Accordion2Disclosure = Accordion2Disclosure;
//# sourceMappingURL=Accordion2Disclosure.js.map