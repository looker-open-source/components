"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _useTooltip2 = require("./useTooltip");

var _excluded = ["aria-controls", "aria-expanded", "aria-haspopup", "disabled", "onClick", "children"],
    _excluded2 = ["className", "onBlur", "onFocus", "onMouseOut", "onMouseOver"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

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
      restDomProps = (0, _objectWithoutProperties2["default"])(domProps, _excluded2);
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
    console.warn("Element \"".concat((0, _typeof2["default"])(target), "\" can't be used as target for Tooltip"));
  }

  return _react["default"].createElement(_react["default"].Fragment, null, tooltip, target);
});
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map