"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlaySurfaceContentArea = exports.OverlaySurface = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _Dialog = require("../Dialog");

var _templateObject, _templateObject2;

var _excluded = ["children", "className", "eventHandlers", "placement", "style", "role"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OverlaySurfaceLayout = (0, _react.forwardRef)(function (props, forwardedRef) {
  var children = props.children,
      className = props.className,
      eventHandlers = props.eventHandlers,
      placement = props.placement,
      style = props.style,
      role = props.role,
      otherProps = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var _useContext = (0, _react.useContext)(_Dialog.DialogContext),
      closeModal = _useContext.closeModal;

  var _partitionAriaProps = (0, _utils.partitionAriaProps)(otherProps),
      _partitionAriaProps2 = (0, _slicedToArray2["default"])(_partitionAriaProps, 1),
      ariaProps = _partitionAriaProps2[0];

  var innerRef = (0, _react.useRef)(null);
  var ref = (0, _utils.useForkedRef)(forwardedRef, innerRef);
  (0, _utils.useGlobalHotkeys)('esc', closeModal, innerRef);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    role: role
  }, ariaProps, {
    ref: ref,
    style: style,
    className: className
  }, eventHandlers, {
    tabIndex: -1,
    "data-placement": placement
  }), _react["default"].createElement(OverlaySurfaceContentArea, {
    tabIndex: -1,
    "data-overlay-surface": true
  }, children));
});
OverlaySurfaceLayout.displayName = 'OverlaySurfaceLayout';
var OverlaySurface = (0, _styledComponents["default"])(OverlaySurfaceLayout).withConfig({
  displayName: "OverlaySurface",
  componentId: "sc-wd3uv8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  animation: ", " ease-in;\n  animation-duration: ", ";\n  ", "\n  overflow: visible;\n  z-index: ", ";\n\n  &[data-placement*='top'] {\n    padding-bottom: ", ";\n  }\n\n  &[data-placement*='right'] {\n    padding-left: ", ";\n  }\n\n  &[data-placement*='bottom'] {\n    padding-top: ", ";\n  }\n\n  &[data-placement*='left'] {\n    padding-right: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n"])), _designTokens.reset, _designTokens.fadeIn, function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.transitions.quick, "ms");
}, _designTokens.maxWidth, function (_ref2) {
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
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n\n  &:focus {\n    outline: none;\n  }\n"])), function (_ref7) {
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