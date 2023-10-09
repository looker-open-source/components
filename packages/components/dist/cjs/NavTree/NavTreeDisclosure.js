"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTreeDisclosure = void 0;
var _pick = _interopRequireDefault(require("lodash/pick"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Ripple = require("../Ripple");
var _utils = require("../Tree/utils");
var _utils2 = require("../ListItem/utils");
var _excluded = ["children", "className", "disabled", "hovered", "ripple", "selected", "style"],
  _excluded2 = ["callbacks"];
var _templateObject;
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
var NavTreeDisclosure = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    hovered = _ref.hovered,
    ripple = _ref.ripple,
    selected = _ref.selected,
    style = _ref.style,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useBoundedRipple = (0, _Ripple.useBoundedRipple)({
      className: className,
      color: selected ? 'key' : 'neutral',
      style: style
    }),
    callbacks = _useBoundedRipple.callbacks,
    ripplePropsRest = _objectWithoutProperties(_useBoundedRipple, _excluded2);
  var rippleHandlers = (0, _Ripple.useRippleHandlers)(callbacks, (0, _pick["default"])(props, _Ripple.rippleHandlerKeys), disabled);
  var rippleProps = _objectSpread(_objectSpread({}, ripplePropsRest), rippleHandlers);
  return _react["default"].createElement("li", _extends({}, props, rippleProps), children);
}).withConfig({
  displayName: "NavTreeDisclosure",
  componentId: "sc-iyovyt-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n\n  color: ", ";\n  display: flex;\n"])), _utils.generateIndent, _utils2.listItemBackgroundColor, _Ripple.rippleStyle, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.text5;
});
exports.NavTreeDisclosure = NavTreeDisclosure;
//# sourceMappingURL=NavTreeDisclosure.js.map