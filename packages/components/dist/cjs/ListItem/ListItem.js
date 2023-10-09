"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _Icon = require("../Icon");
var _ListItemContext = require("./ListItemContext");
var _ListItemContent = require("./ListItemContent");
var _ListItemWrapper = require("./ListItemWrapper");
var _utils2 = require("./utils");
var _templateObject;
var _excluded = ["children", "className", "color", "colorOnHover", "density", "description", "detail", "disabled", "hovered", "href", "icon", "itemRole", "onBlur", "onClick", "onKeyDown", "onKeyUp", "onMouseEnter", "onMouseLeave", "rel", "ripple", "role", "selected", "tabIndex", "target", "truncate"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ListItemInternal = (0, _react.forwardRef)(function (props, ref) {
  var _children = props.children,
    className = props.className,
    propsColor = props.color,
    colorOnHover = props.colorOnHover,
    propsDensity = props.density,
    _description = props.description,
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
    _truncate = props.truncate,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0, _react.useContext)(_ListItemContext.ListItemContext),
    contextDensity = _useContext.density,
    iconGutter = _useContext.iconGutter,
    contextColor = _useContext.color;
  var density = propsDensity || contextDensity;
  var color = (0, _utils.undefinedCoalesce)([propsColor, contextColor]);
  var _useState = (0, _react.useState)(propsHovered),
    _useState2 = _slicedToArray(_useState, 2),
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
    _partitionAriaProps2 = _slicedToArray(_partitionAriaProps, 2),
    ariaProps = _partitionAriaProps2[0],
    wrapperProps = _partitionAriaProps2[1];
  var _createListItemPartit = (0, _utils2.createListItemPartitions)(_objectSpread(_objectSpread({}, props), {}, {
      color: color,
      density: density,
      detail: detail,
      icon: icon || (iconGutter ? _react["default"].createElement(_Icon.IconPlaceholder, null) : undefined)
    })),
    _createListItemPartit2 = _slicedToArray(_createListItemPartit, 2),
    insideElements = _createListItemPartit2[0],
    outsideElements = _createListItemPartit2[1];
  var statefulProps = {
    color: color,
    colorOnHover: colorOnHover,
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
  }, _react["default"].createElement(_ListItemWrapper.ListItemWrapper, _extends({
    className: className,
    color: (0, _utils2.listItemLabelColor)(color, disabled),
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave,
    ref: actualRef
  }, wrapperProps), _react["default"].createElement(_ListItemContent.ListItemContent, _extends({
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
var ListItem = (0, _styledComponents["default"])(ListItemInternal).withConfig({
  displayName: "ListItem",
  componentId: "sc-1n26s38-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map