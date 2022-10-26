"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Layout = require("../Layout");

var _utils = require("../ListItem/utils");

var _utils2 = require("../utils");

var _TreeContext = require("../Tree/TreeContext");

var _LkFieldItemContent = require("./LkFieldItemContent");

var _LkFieldItemLabel = require("./LkFieldItemLabel");

var _defaults = require("./defaults");

var _excluded = ["className", "color", "disabled", "onBlur", "onClick", "onFocus", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "selected"],
    _excluded2 = ["focusVisible"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var LkFieldItem = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
      color = _ref.color,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onKeyDown = _ref.onKeyDown,
      onKeyUp = _ref.onKeyUp,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      selected = _ref.selected,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_TreeContext.TreeContext),
      depth = _useContext.depth;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var handleWrapperMouseEnter = (0, _utils2.useWrapEvent)(function () {
    return setHovered(true);
  }, onMouseEnter);
  var handleWrapperMouseLeave = (0, _utils2.useWrapEvent)(function () {
    return setHovered(false);
  }, onMouseLeave);

  var handleWrapperFocus = function handleWrapperFocus() {
    return setHovered(true);
  };

  var handleWrapperBlur = function handleWrapperBlur(event) {
    var nextFocusTarget = event.relatedTarget;

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };

  var _useFocusVisible = (0, _utils2.useFocusVisible)({
    onBlur: onBlur,
    onKeyUp: onKeyUp
  }),
      focusVisible = _useFocusVisible.focusVisible,
      focusVisibleHandlers = (0, _objectWithoutProperties2["default"])(_useFocusVisible, _excluded2);

  var statefulProps = {
    color: color,
    disabled: disabled,
    hovered: hovered,
    selected: selected
  };

  var _partitionAriaProps = (0, _utils2.partitionAriaProps)(restProps),
      _partitionAriaProps2 = (0, _slicedToArray2["default"])(_partitionAriaProps, 2),
      ariaProps = _partitionAriaProps2[0],
      wrapperProps = _partitionAriaProps2[1];

  var _createListItemPartit = (0, _utils.createListItemPartitions)(_objectSpread(_objectSpread({
    density: _defaults.lkFieldItemDensity
  }, restProps), statefulProps)),
      _createListItemPartit2 = (0, _slicedToArray2["default"])(_createListItemPartit, 2),
      inside = _createListItemPartit2[0],
      outside = _createListItemPartit2[1];

  return _react["default"].createElement(_utils2.HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, _react["default"].createElement(_Layout.Flex, (0, _extends2["default"])({
    role: "group",
    className: className,
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave
  }, wrapperProps), _react["default"].createElement(_LkFieldItemContent.LkFieldItemContent, (0, _extends2["default"])({
    "aria-selected": selected,
    depth: depth + 1,
    role: "treeitem",
    focusVisible: focusVisible,
    onClick: onClick,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    tabIndex: -1
  }, ariaProps, focusVisibleHandlers, statefulProps), _react["default"].createElement(_LkFieldItemLabel.LkFieldItemLabel, statefulProps, inside)), outside));
}).withConfig({
  displayName: "LkFieldItem",
  componentId: "sc-bwajwd-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.LkFieldItem = LkFieldItem;
//# sourceMappingURL=LkFieldItem.js.map