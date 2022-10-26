"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldsetContext = exports.Fieldset = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _Layout = require("../../Layout");

var _simple = require("../../Layout/utils/simple");

var _Legend = require("../Legend");

var _Accordion = require("../../Accordion2");

var _accordionDimensions = require("../../Accordion2/accordionDimensions");

var _templateObject, _templateObject2;

var _excluded = ["accordion", "className", "inline", "gap", "legend", "fieldsHideLabel", "children", "wrap", "defaultOpen", "isOpen", "toggleOpen", "onClose", "onOpen"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
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
  }, _react["default"].createElement("div", (0, _extends2["default"])({}, (0, _designTokens.omitStyledProps)(restProps), {
    className: className
  }), renderedFieldset));
});

var FieldsetAccordionLegend = function FieldsetAccordionLegend(props) {
  return _react["default"].createElement(_Legend.Legend, (0, _extends2["default"])({
    py: "xxsmall",
    fontSize: "small"
  }, props));
};

FieldsetLayout.displayName = 'FieldsetLayout';

var FieldsetAccordionContent = _styledComponents["default"].div.withConfig({
  displayName: "Fieldset__FieldsetAccordionContent",
  componentId: "sc-fc4a60-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: ", ";\n  padding-top: ", ";\n"])), function (_ref) {
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
  componentId: "sc-fc4a60-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _simple.simpleLayoutCSS);
exports.Fieldset = Fieldset;
//# sourceMappingURL=Fieldset.js.map