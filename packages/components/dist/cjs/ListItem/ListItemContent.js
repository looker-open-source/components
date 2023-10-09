"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listItemLabelCSS = exports.listItemContentCSS = exports.ListItemContent = void 0;
var _pick = _interopRequireDefault(require("lodash/pick"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Ripple = require("../Ripple");
var _utils = require("./utils");
var _excluded = ["className", "children", "color", "colorOnHover", "itemRole", "ripple", "selected", "style"],
  _excluded2 = ["callbacks"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = _styledComponents["default"].button.attrs(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type;
  return {
    type: type
  };
}).withConfig({
  displayName: "ListItemContent__Button",
  componentId: "sc-1ietpwm-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-family: inherit;\n"])));
var Link = _styledComponents["default"].a.withConfig({
  displayName: "ListItemContent__Link",
  componentId: "sc-1ietpwm-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var Div = _styledComponents["default"].div.withConfig({
  displayName: "ListItemContent__Div",
  componentId: "sc-1ietpwm-2"
})(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
var listItemContentCSS = function listItemContentCSS(style) {
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  > ", ", > ", ", > ", " {\n    ", "\n  }\n"])), Button, Link, Div, style);
};
exports.listItemContentCSS = listItemContentCSS;
var listItemLabelCSS = listItemContentCSS;
exports.listItemLabelCSS = listItemLabelCSS;
var ListItemContent = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref2, forwardedRef) {
  var className = _ref2.className,
    children = _ref2.children,
    color = _ref2.color,
    colorOnHover = _ref2.colorOnHover,
    _ref2$itemRole = _ref2.itemRole,
    itemRole = _ref2$itemRole === void 0 ? 'button' : _ref2$itemRole,
    _ref2$ripple = _ref2.ripple,
    ripple = _ref2$ripple === void 0 ? true : _ref2$ripple,
    selected = _ref2.selected,
    style = _ref2.style,
    props = _objectWithoutProperties(_ref2, _excluded);
  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
      className: className,
      color: (selected || colorOnHover) && (0, _utils.isListColor)(color) ? color : 'neutral',
      ref: forwardedRef,
      style: style
    }),
    callbacks = _useBoundedRipple.callbacks,
    rippleRestProps = _objectWithoutProperties(_useBoundedRipple, _excluded2);
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), props.disabled);
  var rippleProps = ripple ? _objectSpread(_objectSpread({}, rippleRestProps), rippleHandlers) : {
    className: className,
    style: style
  };
  if (!props.disabled && itemRole === 'link') {
    return _react["default"].createElement(Link, _extends({
      ref: forwardedRef
    }, props, rippleProps), children);
  } else if (itemRole === 'none') {
    return _react["default"].createElement(Div, _extends({
      ref: forwardedRef
    }, props, rippleProps), children);
  }
  return _react["default"].createElement(Button, _extends({
    ref: forwardedRef
  }, props, rippleProps, {
    type: "button"
  }), children);
})).withConfig({
  displayName: "ListItemContent",
  componentId: "sc-1ietpwm-3"
})(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n\n  align-items: center;\n  border: none;\n  color: inherit;\n  cursor: ", ";\n  display: flex;\n  flex: 1;\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0; /* safari has default margin */\n  min-width: 0;\n  outline: none;\n\n  padding: 0; /* Remove default top and bottom padding */\n  ", "\n\n  /*\n    Supports absolutely positioned box-shadow\n  */\n  position: relative;\n\n  text-align: left;\n  text-decoration: none;\n  width: 100%;\n\n  &:hover,\n  &:focus {\n    color: inherit;\n    text-decoration: none;\n  }\n"])), _utils.listItemBackgroundColor, _Ripple.rippleStyle, function (_ref3) {
  var cursorPointer = _ref3.cursorPointer;
  return cursorPointer ? 'pointer' : undefined;
}, function (_ref4) {
  var density = _ref4.density;
  return (0, _utils.listItemPaddingX)(density);
});
exports.ListItemContent = ListItemContent;
//# sourceMappingURL=ListItemContent.js.map