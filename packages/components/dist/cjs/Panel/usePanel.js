"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePanel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _VisuallyHidden = require("../VisuallyHidden");
var _utils = require("../utils");
var _PanelHeader = require("./PanelHeader");
var _Panels = require("./Panels");
var _PanelSurface = require("./PanelSurface");
var _PanelWindow = require("./PanelWindow");
var _templateObject;
var _excluded = ["canClose", "content", "defaultOpen", "direction", "isOpen", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "disableAnimation"];
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
var usePanel = function usePanel(_ref) {
  var canClose = _ref.canClose,
    content = _ref.content,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'left' : _ref$direction,
    controlledIsOpen = _ref.isOpen,
    onAfterClose = _ref.onAfterClose,
    onAfterOpen = _ref.onAfterOpen,
    onClose = _ref.onClose,
    controlledSetOpen = _ref.setOpen,
    disableAnimation = _ref.disableAnimation,
    headerProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    uncontrolledIsOpen = _useState2[0],
    setUncontrolledIsOpen = _useState2[1];
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['setOpen'],
    isControlledCheck: function isControlledCheck() {
      return controlledSetOpen !== undefined;
    },
    name: 'usePanel'
  });
  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    throw new Error('usePanel does not support setting both `setOpen` and `onClose`. Use just `setOpen`');
  }
  var isOpen = isControlled ? controlledIsOpen || false : uncontrolledIsOpen;
  var firstRender = (0, _react.useRef)(true);
  var _useAnimationState = (0, _utils.useAnimationState)({
      enter: disableAnimation || isOpen && firstRender.current ? 'none' : undefined,
      exit: disableAnimation ? 'none' : undefined,
      isOpen: isOpen,
      onAfterEntered: onAfterOpen,
      onAfterExited: onAfterClose
    }),
    busy = _useAnimationState.busy,
    className = _useAnimationState.className,
    renderDOM = _useAnimationState.renderDOM;
  firstRender.current = false;
  var setOpen = isControlled && controlledSetOpen ? controlledSetOpen : setUncontrolledIsOpen;
  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  var handleClose = function handleClose() {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  };
  var setInitialFocus = (0, _react.useCallback)(function (element) {
    element === null || element === void 0 ? void 0 : element.focus({
      preventScroll: true
    });
  }, []);
  var _useTrapStack = (0, _utils.useTrapStack)({
      context: _Panels.PanelsContext
    }),
    _useTrapStack2 = _slicedToArray(_useTrapStack, 2),
    ref = _useTrapStack2[1];
  var visibilityTrigger = className === 'entered' && _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
    ref: ref
  });
  var panel = renderDOM && _react["default"].createElement(_PanelWindow.PanelWindow, null, _react["default"].createElement(_PanelSurface.PanelSurface, {
    "aria-busy": busy ? true : undefined,
    className: className,
    direction: direction,
    "data-panel": true,
    tabIndex: -1,
    ref: setInitialFocus
  }, visibilityTrigger, _react["default"].createElement(_PanelHeader.PanelHeader, _extends({
    onClose: handleClose
  }, headerProps)), _react["default"].createElement(PanelContent, null, content)));
  return {
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button'
    },
    isOpen: isOpen,
    panel: panel,
    setOpen: setOpen
  };
};
exports.usePanel = usePanel;
var PanelContent = _styledComponents["default"].div.withConfig({
  displayName: "usePanel__PanelContent",
  componentId: "sc-145ldfd-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: auto;\n"])));
//# sourceMappingURL=usePanel.js.map