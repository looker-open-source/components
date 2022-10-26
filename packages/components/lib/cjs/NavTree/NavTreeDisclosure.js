"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTreeDisclosure = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ripple = require("../Ripple");

var _utils = require("../Tree/utils");

var _utils2 = require("../ListItem/utils");

var _excluded = ["children", "className", "disabled", "hovered", "ripple", "selected", "style"],
    _excluded2 = ["callbacks"];

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var NavTreeDisclosure = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      hovered = _ref.hovered,
      ripple = _ref.ripple,
      selected = _ref.selected,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: selected ? 'key' : 'neutral',
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      ripplePropsRest = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), disabled);

  var rippleProps = _objectSpread(_objectSpread({}, ripplePropsRest), rippleHandlers);

  return _react["default"].createElement("li", (0, _extends2["default"])({}, props, rippleProps), children);
}).withConfig({
  displayName: "NavTreeDisclosure",
  componentId: "sc-iyovyt-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n\n  color: ", ";\n  display: flex;\n"])), _utils.generateIndent, _utils2.listItemBackgroundColor, _Ripple.rippleStyle, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text5;
});
exports.NavTreeDisclosure = NavTreeDisclosure;
//# sourceMappingURL=NavTreeDisclosure.js.map