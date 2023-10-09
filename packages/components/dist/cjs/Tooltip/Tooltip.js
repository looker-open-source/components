"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _useTooltip2 = require("./useTooltip");
var _excluded = ["aria-controls", "aria-expanded", "aria-haspopup", "disabled", "onClick", "children"],
  _excluded2 = ["className", "onBlur", "onFocus", "onMouseOut", "onMouseOver"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function isRenderProp(children) {
  return typeof children === 'function';
}
var noop = function noop() {};
var Tooltip = (0, _react.forwardRef)(function (_ref, _) {
  var ariaControls = _ref['aria-controls'],
    ariaExpanded = _ref['aria-expanded'],
    ariaHaspopup = _ref['aria-haspopup'],
    disabled = _ref.disabled,
    onClick = _ref.onClick,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useTooltip = (0, _useTooltip2.useTooltip)(_objectSpread({
      disabled: disabled || ariaExpanded
    }, props)),
    domProps = _useTooltip.domProps,
    tooltip = _useTooltip.tooltip;
  var className = domProps.className,
    onBlur = domProps.onBlur,
    onFocus = domProps.onFocus,
    onMouseOut = domProps.onMouseOut,
    onMouseOver = domProps.onMouseOver,
    restDomProps = _objectWithoutProperties(domProps, _excluded2);
  var target = children;
  var childProps = (0, _react.isValidElement)(children) ? children.props : undefined;
  var wrappedHandlers = {
    onBlur: (0, _utils.useWrapEvent)(onBlur, childProps === null || childProps === void 0 ? void 0 : childProps.onBlur),
    onClick: (0, _utils.useWrapEvent)(onClick || noop, childProps === null || childProps === void 0 ? void 0 : childProps.onClick),
    onFocus: (0, _utils.useWrapEvent)(onFocus, childProps === null || childProps === void 0 ? void 0 : childProps.onFocus),
    onMouseOut: (0, _utils.useWrapEvent)(onMouseOut, childProps === null || childProps === void 0 ? void 0 : childProps.onMouseOut),
    onMouseOver: (0, _utils.useWrapEvent)(onMouseOver, childProps === null || childProps === void 0 ? void 0 : childProps.onMouseOver)
  };
  if ((0, _react.isValidElement)(children)) {
    target = (0, _react.cloneElement)(children, _objectSpread(_objectSpread(_objectSpread({}, wrappedHandlers), restDomProps), {}, {
      'aria-controls': ariaControls,
      'aria-expanded': ariaExpanded,
      'aria-haspopup': ariaHaspopup,
      className: (0, _utils.mergeClassNames)([className, children.props.className])
    }));
  } else if (isRenderProp(children)) {
    target = children(domProps);
  } else {
    console.warn("Element \"".concat(_typeof(target), "\" can't be used as target for Tooltip"));
  }
  return _react["default"].createElement(_react["default"].Fragment, null, tooltip, target);
});
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map