"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionIndicator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIcon = require("@styled-icons/styled-icon");

var _Ripple = require("../Ripple");

var _accordionDimensions = require("./accordionDimensions");

var _excluded = ["children", "density", "indicatorPosition"];

var _templateObject, _templateObject2;

var size = function size() {
  var density = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _accordionDimensions.accordionDimensions)(density).indicatorSize;
};

var gap = function gap() {
  var density = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _accordionDimensions.accordionDimensions)(density).indicatorGap;
};

var AccordionIndicator = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      density = _ref.density,
      indicatorPosition = _ref.indicatorPosition,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useRipple = (0, _Ripple.useRipple)({
    color: 'neutral'
  }),
      callbacks = _useRipple.callbacks,
      rippleClassName = _useRipple.className,
      rippleStyle = _useRipple.style;

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys));
  var rippleContainerProps = {
    className: rippleClassName,
    style: rippleStyle
  };
  var isIndicatorToggleOnly = props.tabIndex === -1;
  return _react["default"].createElement("div", (0, _extends2["default"])({}, props, isIndicatorToggleOnly && rippleHandlers), _react["default"].createElement(RippleContainer, (0, _extends2["default"])({
    density: density || 0
  }, rippleContainerProps), children));
}).withConfig({
  displayName: "AccordionIndicator",
  componentId: "sc-1w66fqe-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  outline: none;\n\n  ", "\n\n  ", " {\n    height: ", ";\n    /*\n      Default vertical-align is set to middle which shifts indicator icon\n      below mid-point\n    */\n    vertical-align: baseline;\n    width: ", ";\n  }\n"])), function (_ref2) {
  var density = _ref2.density,
      indicatorPosition = _ref2.indicatorPosition,
      space = _ref2.theme.space;
  return indicatorPosition === 'left' ? "margin-right: ".concat(space[gap(density)], ";") : "margin-left: ".concat(space[gap(density)], ";");
}, _styledIcon.StyledIconBase, function (_ref3) {
  var density = _ref3.density,
      theme = _ref3.theme;
  return theme.sizes[size(density)];
}, function (_ref4) {
  var density = _ref4.density,
      theme = _ref4.theme;
  return theme.sizes[size(density)];
});
exports.AccordionIndicator = AccordionIndicator;

var RippleContainer = _styledComponents["default"].div.withConfig({
  displayName: "AccordionIndicator__RippleContainer",
  componentId: "sc-1w66fqe-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  border-radius: 50%;\n  height: ", ";\n  width: ", ";\n"])), _Ripple.rippleStyle, function (_ref5) {
  var density = _ref5.density,
      theme = _ref5.theme;
  return theme.sizes[size(density)];
}, function (_ref6) {
  var density = _ref6.density,
      theme = _ref6.theme;
  return theme.sizes[size(density)];
});
//# sourceMappingURL=AccordionIndicator.js.map