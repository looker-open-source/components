"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlaySurfaceContentArea = exports.OverlaySurface = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _merge = _interopRequireDefault(require("lodash/merge"));
var _utils = require("../utils");
var _Dialog = require("../Dialog");
var _OverlayArrow = require("./OverlayArrow");
var _templateObject, _templateObject2;
var _excluded = ["children", "className", "eventHandlers", "placement", "style", "role", "arrow", "styleArrow"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var OverlaySurfaceLayout = (0, _react.forwardRef)(function (props, forwardedRef) {
  var children = props.children,
    className = props.className,
    eventHandlers = props.eventHandlers,
    placement = props.placement,
    style = props.style,
    role = props.role,
    arrow = props.arrow,
    styleArrow = props.styleArrow,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _useContext = (0, _react.useContext)(_Dialog.DialogContext),
    closeModal = _useContext.closeModal;
  var _partitionAriaProps = (0, _utils.partitionAriaProps)(otherProps),
    _partitionAriaProps2 = _slicedToArray(_partitionAriaProps, 1),
    ariaProps = _partitionAriaProps2[0];
  var innerRef = (0, _react.useRef)(null);
  var ref = (0, _utils.useForkedRef)(forwardedRef, innerRef);
  (0, _utils.useGlobalHotkeys)('Escape', closeModal, innerRef);
  var arrowBaseProps = {
    'data-placement': placement,
    style: styleArrow
  };
  var arrowProps = typeof arrow === 'boolean' ? arrowBaseProps : (0, _merge["default"])(arrowBaseProps, arrow);
  return _react["default"].createElement("div", _extends({
    role: role
  }, ariaProps, {
    ref: ref,
    style: style,
    className: className
  }, eventHandlers, {
    tabIndex: -1,
    "data-placement": placement
  }), arrow && _react["default"].createElement(_OverlayArrow.OverlayArrow, arrowProps), _react["default"].createElement(OverlaySurfaceContentArea, {
    tabIndex: -1,
    "data-overlay-surface": true
  }, children));
});
OverlaySurfaceLayout.displayName = 'OverlaySurfaceLayout';
var OverlaySurface = (0, _styledComponents["default"])(OverlaySurfaceLayout).withConfig({
  displayName: "OverlaySurface",
  componentId: "sc-wd3uv8-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  animation: ", " ease-in;\n  animation-duration: ", ";\n  ", "\n  ", "\n  overflow: visible;\n  z-index: ", ";\n\n  &[data-placement*='top'] {\n    padding-bottom: ", ";\n  }\n\n  &[data-placement*='right'] {\n    padding-left: ", ";\n  }\n\n  &[data-placement*='bottom'] {\n    padding-top: ", ";\n  }\n\n  &[data-placement*='left'] {\n    padding-right: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), _designTokens.reset, _designTokens.fadeIn, function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.transitions.quick, "ms");
}, _designTokens.maxWidth, _designTokens.minWidth, function (_ref2) {
  var zIndexFloor = _ref2.theme.zIndexFloor;
  return zIndexFloor || undefined;
}, function (_ref3) {
  var space = _ref3.theme.space;
  return space.u2;
}, function (_ref4) {
  var space = _ref4.theme.space;
  return space.u2;
}, function (_ref5) {
  var space = _ref5.theme.space;
  return space.u2;
}, function (_ref6) {
  var space = _ref6.theme.space;
  return space.u2;
});
exports.OverlaySurface = OverlaySurface;
var OverlaySurfaceContentArea = _styledComponents["default"].div.withConfig({
  displayName: "OverlaySurface__OverlaySurfaceContentArea",
  componentId: "sc-wd3uv8-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n\n  &:focus {\n    outline: none;\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.background;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.radii.medium;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.elevations.plus2;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.text;
});
exports.OverlaySurfaceContentArea = OverlaySurfaceContentArea;
//# sourceMappingURL=OverlaySurface.js.map