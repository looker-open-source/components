"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemLabelCSS = exports.listItemContentCSS = exports.ListItemContent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Ripple = require("../Ripple");

var _types = require("./types");

var _utils = require("./utils");

var _excluded = ["className", "children", "color", "itemRole", "ripple", "selected", "style"],
    _excluded2 = ["callbacks"];

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Button = _styledComponents["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type;
  return {
    type: type
  };
}).withConfig({
  displayName: "ListItemContent__Button",
  componentId: "sc-1ietpwm-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: inherit;\n"])));

var Link = _styledComponents["default"].a.withConfig({
  displayName: "ListItemContent__Link",
  componentId: "sc-1ietpwm-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));

var Div = _styledComponents["default"].div.withConfig({
  displayName: "ListItemContent__Div",
  componentId: "sc-1ietpwm-2"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])([""])));

var listItemContentCSS = function listItemContentCSS(style) {
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  > ", ", > ", ", > ", " {\n    ", "\n  }\n"])), Button, Link, Div, style);
};

exports.listItemContentCSS = listItemContentCSS;
var listItemLabelCSS = listItemContentCSS;
exports.listItemLabelCSS = listItemLabelCSS;
var ListItemContent = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref2, forwardedRef) {
  var className = _ref2.className,
      children = _ref2.children,
      color = _ref2.color,
      _ref2$itemRole = _ref2.itemRole,
      itemRole = _ref2$itemRole === void 0 ? 'button' : _ref2$itemRole,
      _ref2$ripple = _ref2.ripple,
      ripple = _ref2$ripple === void 0 ? true : _ref2$ripple,
      selected = _ref2.selected,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);

  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
    className: className,
    color: selected && _types.listItemColorOptions.includes(color) ? color : 'neutral',
    ref: forwardedRef,
    style: style
  }),
      callbacks = _useBoundedRipple.callbacks,
      rippleRestProps = (0, _objectWithoutProperties2["default"])(_useBoundedRipple, _excluded2);

  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), props.disabled);
  var rippleProps = ripple ? _objectSpread(_objectSpread({}, rippleRestProps), rippleHandlers) : {
    className: className,
    style: style
  };

  if (!props.disabled && itemRole === 'link') {
    return _react["default"].createElement(Link, (0, _extends2["default"])({
      ref: forwardedRef
    }, props, rippleProps), children);
  } else if (itemRole === 'none') {
    return _react["default"].createElement(Div, (0, _extends2["default"])({
      ref: forwardedRef
    }, props, rippleProps), children);
  }

  return _react["default"].createElement(Button, (0, _extends2["default"])({
    ref: forwardedRef
  }, props, rippleProps, {
    type: "button"
  }), children);
})).withConfig({
  displayName: "ListItemContent",
  componentId: "sc-1ietpwm-3"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n\n  align-items: center;\n  border: none;\n  color: inherit;\n  cursor: ", ";\n  display: flex;\n  flex: 1;\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0; /* safari has default margin */\n  min-width: 0;\n  outline: none;\n\n  padding: 0; /* Remove default top and bottom padding */\n  ", "\n\n  /*\n    Supports absolutely positioned box-shadow\n  */\n  position: relative;\n\n  text-align: left;\n  text-decoration: none;\n  width: 100%;\n\n  &:hover,\n  &:focus {\n    color: inherit;\n    text-decoration: none;\n  }\n"])), _utils.listItemBackgroundColor, _Ripple.rippleStyle, function (_ref3) {
  var cursorPointer = _ref3.cursorPointer;
  return cursorPointer ? 'pointer' : undefined;
}, function (_ref4) {
  var density = _ref4.density;
  return (0, _utils.listItemPaddingX)(density);
});
exports.ListItemContent = ListItemContent;
//# sourceMappingURL=ListItemContent.js.map