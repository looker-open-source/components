"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsetContext = exports.Fieldset = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Layout = require("../Layout");
var _simple = require("../Layout/utils/simple");
var _Legend = require("../Form/Legend");
var _Accordion = require("../Accordion2");
var _accordionDimensions = require("../Accordion2/accordionDimensions");
var _templateObject, _templateObject2;
var _excluded = ["accordion", "className", "inline", "gap", "legend", "fieldsHideLabel", "children", "wrap", "defaultOpen", "isOpen", "toggleOpen", "onClose", "onOpen"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var FieldsetContext = (0, _react.createContext)({});
exports.FieldsetContext = FieldsetContext;
var FieldsetLayout = (0, _react.forwardRef)(function (props, ref) {
  var accordion = props.accordion,
    className = props.className,
    inline = props.inline,
    _props$gap = props.gap,
    gap = _props$gap === void 0 ? 'u4' : _props$gap,
    legend = props.legend,
    fieldsHideLabel = props.fieldsHideLabel,
    children = props.children,
    wrap = props.wrap,
    defaultOpen = props.defaultOpen,
    isOpen = props.isOpen,
    toggleOpen = props.toggleOpen,
    onClose = props.onClose,
    onOpen = props.onOpen,
    restProps = _objectWithoutProperties(props, _excluded);
  var LayoutComponent = inline ? _Layout.Space : _Layout.SpaceVertical;
  var content = _react["default"].createElement(LayoutComponent, {
    gap: gap,
    ref: ref,
    role: "group",
    align: "start",
    flexWrap: wrap ? 'wrap' : undefined
  }, children);
  !legend && accordion && console.warn('Please provide a value for the "legend" prop if using accordion mode');
  var LegendComponent = accordion ? FieldsetAccordionLegend : _Legend.Legend;
  var legendRender = typeof legend === 'string' ? _react["default"].createElement(LegendComponent, null, legend) : legend;
  var accordionProps = {
    defaultOpen: defaultOpen,
    indicatorPosition: 'left',
    label: legendRender,
    onClose: onClose,
    onOpen: onOpen
  };
  if (isOpen && toggleOpen) {
    accordionProps = _objectSpread(_objectSpread({}, accordionProps), {}, {
      isOpen: isOpen,
      toggleOpen: toggleOpen
    });
  }
  var renderedFieldset = content;
  if (legend) {
    if (accordion) {
      renderedFieldset = _react["default"].createElement(_Accordion.Accordion2, accordionProps, _react["default"].createElement(FieldsetAccordionContent, null, content));
    } else {
      renderedFieldset = _react["default"].createElement(_Layout.SpaceVertical, null, legendRender, content);
    }
  }
  return _react["default"].createElement(FieldsetContext.Provider, {
    value: {
      fieldsHideLabel: fieldsHideLabel || false
    }
  }, _react["default"].createElement("div", _extends({}, (0, _designTokens.omitStyledProps)(restProps), {
    className: className
  }), renderedFieldset));
});
var FieldsetAccordionLegend = function FieldsetAccordionLegend(props) {
  return _react["default"].createElement(_Legend.Legend, _extends({
    py: "xxsmall",
    fontSize: "small"
  }, props));
};
var FieldsetAccordionContent = _styledComponents["default"].div.withConfig({
  displayName: "Fieldset__FieldsetAccordionContent",
  componentId: "sc-ih8f8e-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-left: ", ";\n  padding-top: ", ";\n"])), function (_ref) {
  var theme = _ref.theme;
  return "calc(".concat(theme.sizes[(0, _accordionDimensions.accordionDimensions)().indicatorSize], " + ").concat(theme.space[(0, _accordionDimensions.accordionDimensions)().indicatorGap], ")");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u4;
});
var Fieldset = (0, _styledComponents["default"])(FieldsetLayout).attrs(function (_ref3) {
  var _ref3$width = _ref3.width,
    width = _ref3$width === void 0 ? '100%' : _ref3$width;
  return {
    width: width
  };
}).withConfig({
  displayName: "Fieldset",
  componentId: "sc-ih8f8e-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), _simple.simpleLayoutCSS);
exports.Fieldset = Fieldset;
//# sourceMappingURL=Fieldset.js.map