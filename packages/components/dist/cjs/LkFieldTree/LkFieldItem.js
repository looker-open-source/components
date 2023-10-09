"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldItem = void 0;
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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_TreeContext.TreeContext),
    depth = _useContext.depth;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
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
    focusVisibleHandlers = _objectWithoutProperties(_useFocusVisible, _excluded2);
  var statefulProps = {
    color: color,
    disabled: disabled,
    hovered: hovered,
    selected: selected
  };
  var _partitionAriaProps = (0, _utils2.partitionAriaProps)(restProps),
    _partitionAriaProps2 = _slicedToArray(_partitionAriaProps, 2),
    ariaProps = _partitionAriaProps2[0],
    wrapperProps = _partitionAriaProps2[1];
  var _createListItemPartit = (0, _utils.createListItemPartitions)(_objectSpread(_objectSpread({
      density: _defaults.lkFieldItemDensity
    }, restProps), statefulProps)),
    _createListItemPartit2 = _slicedToArray(_createListItemPartit, 2),
    inside = _createListItemPartit2[0],
    outside = _createListItemPartit2[1];
  return _react["default"].createElement(_utils2.HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, _react["default"].createElement(_Layout.Flex, _extends({
    role: "group",
    className: className,
    onBlur: handleWrapperBlur,
    onFocus: handleWrapperFocus,
    onMouseEnter: handleWrapperMouseEnter,
    onMouseLeave: handleWrapperMouseLeave
  }, wrapperProps), _react["default"].createElement(_LkFieldItemContent.LkFieldItemContent, _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.LkFieldItem = LkFieldItem;
//# sourceMappingURL=LkFieldItem.js.map