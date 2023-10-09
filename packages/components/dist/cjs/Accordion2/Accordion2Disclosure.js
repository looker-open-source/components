"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion2Disclosure = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _utils = require("../utils");
var _AccordionLabel = require("./AccordionLabel");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["children", "indicator", "indicatorPosition"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Accordion2DisclosureInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    indicator = _ref.indicator,
    indicatorPosition = _ref.indicatorPosition,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement("div", _extends({
    ref: ref
  }, props), indicatorPosition === 'left' && indicator, _react["default"].createElement(_AccordionLabel.AccordionLabel, null, children), indicatorPosition !== 'left' && indicator);
});
Accordion2DisclosureInternal.displayName = 'Accordion2DisclosureInternal';
var labelTypographyDefaults = (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  text-align: left;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeights.semiBold;
});
var Accordion2Disclosure = (0, _styledComponents["default"])(Accordion2DisclosureInternal).withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return ['indicator', 'indicatorPosition'].includes(prop) ? true : (0, _designTokens.shouldForwardProp)(prop);
  },
  displayName: "Accordion2Disclosure",
  componentId: "sc-n100ke-0"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  outline: none;\n  position: relative;\n  width: 100%;\n\n  ", "\n\n  &[disabled] {\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text5;
}, labelTypographyDefaults, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.text1;
}, (0, _utils.focusVisibleCSSWrapper)(function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      box-shadow: inset 0 0 0 2px ", ";\n    "])), theme.colors.keyFocus);
}));
exports.Accordion2Disclosure = Accordion2Disclosure;
//# sourceMappingURL=Accordion2Disclosure.js.map