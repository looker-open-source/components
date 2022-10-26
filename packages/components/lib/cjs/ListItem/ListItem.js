"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _Icon = require("../Icon");

var _ListItemContext = require("./ListItemContext");

var _ListItemContent = require("./ListItemContent");

var _ListItemWrapper = require("./ListItemWrapper");

var _utils2 = require("./utils");

var _templateObject;

var _excluded = ["children", "className", "color", "density", "description", "detail", "disabled", "hovered", "href", "icon", "itemRole", "onBlur", "onClick", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "role", "selected", "tabIndex", "target", "truncate"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ListItemInternal = (0, _react.forwardRef)(function (props, ref) {
  var children = props.children,
      className = props.className,
      propsColor = props.color,
      propsDensity = props.density,
      description = props.description,
      detail = props.detail,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$hovered = props.hovered,
      propsHovered = _props$hovered === void 0 ? false : _props$hovered,
      href = props.href,
      icon = props.icon,
      itemRole = props.itemRole,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      rel = props.rel,
      _props$ripple = props.ripple,
      ripple = _props$ripple === void 0 ? true : _props$ripple,
      role = props.role,
      selected = props.selected,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? -1 : _props$tabIndex,
      target = props.target,
      truncate = props.truncate,
      restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useContext = (0, _react.useContext)(_ListItemContext.ListItemContext),
      contextDensity = _useContext.density,
      iconGutter = _useContext.iconGutter,
      contextColor = _useContext.color;

  var density = propsDensity || contextDensity;
  var color = (0, _utils.undefinedCoalesce)([propsColor, contextColor]);

  var _useState = (0, _react.useState)(propsHovered),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var handleOnClick = function handleOnClick(event) {
    if (itemRole !== 'none' && onClick) {
      onClick(event);
    }
  };

  if (disabled && itemRole === 'link') {
    console.warn('itemRole="link" and disabled cannot be combined - use itemRole="button" if you need to offer a disabled ListItem');
  }

  if (itemRole === 'none' && onClick) {
    console.warn('itemRole="none" and onClick cannot be combined - if itemRole="none" is a necessity, assign click behavior directly to ListItem\'s children');
  }

  var wrapperRef = (0, _react.useRef)(null);
  var actualRef = (0, _utils.useForkedRef)(wrapperRef, ref);

  var _partitionAriaProps = (0, _utils.partitionAriaProps)(restProps),
      _partitionAriaProps2 = (0, _slicedToArray2["default"])(_partitionAriaProps, 2),
      ariaProps = _partitionAriaProps2[0],
      wrapperProps = _partitionAriaProps2[1];

  var _createListItemPartit = (0, _utils2.createListItemPartitions)(_objectSpread(_objectSpread({}, props), {}, {
    color: color,
    density: density,
    detail: detail,
    icon: icon || (iconGutter ? _react["default"].createElement(_Icon.IconPlaceholder, null) : undefined)
  })),
      _createListItemPartit2 = (0, _slicedToArray2["default"])(_createListItemPartit, 2),
      insideElements = _createListItemPartit2[0],
      outsideElements = _createListItemPartit2[1];

  var statefulProps = {
    color: color,
    disabled: disabled,
    hovered: hovered,
    ripple: ripple,
    selected: selected
  };

  var handleWrapperFocus = function handleWrapperFocus() {
    setHovered(true);
  };

  var handleWrapperBlur = function handleWrapperBlur(event) {
    var nextFocusTarget = event.relatedTarget;

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };

  var handleWrapperMouseEnter = (0, _utils.useWrapEvent)(function () {
    return setHovered(true);
  }, onMouseEnter);
  var handleWrapperMouseLeave = (0, _utils.useWrapEvent)(function () {
    return setHovered(false);
  }, onMouseLeave);
  return _react["default"].createElement(_utils.HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, _react["default"].createElement(_ListItemWrapper.ListItemWrapper, (0, _extends2["default"])({
    className: className,
    color: (0, _utils2.listItemLabelColor)(color, disabled),
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave,
    ref: actualRef
  }, wrapperProps), _react["default"].createElement(_ListItemContent.ListItemContent, (0, _extends2["default"])({
    itemRole: itemRole,
    "aria-selected": selected,
    cursorPointer: !!(href || onClick),
    href: href,
    onClick: disabled ? undefined : handleOnClick,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp,
    density: density,
    rel: (0, _utils.createSafeRel)(rel, target),
    role: role || 'listitem',
    target: target,
    tabIndex: tabIndex
  }, ariaProps, statefulProps), insideElements), outsideElements));
});
ListItemInternal.displayName = 'ListItemInternal';
var ListItem = (0, _styledComponents["default"])(ListItemInternal).withConfig({
  displayName: "ListItem",
  componentId: "sc-1n26s38-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map