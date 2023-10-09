"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Portal = require("../Portal");
var _utils = require("../utils");
var _Backdrop = require("./Backdrop");
var _DialogContext = require("./DialogContext");
var _DialogSurface = require("./DialogSurface");
var _excluded = ["content", "defaultOpen", "isOpen", "canClose", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "Surface", "placement", "id"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var useDialog = function useDialog(_ref) {
  var content = _ref.content,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    controlledIsOpen = _ref.isOpen,
    canClose = _ref.canClose,
    onAfterClose = _ref.onAfterClose,
    onAfterOpen = _ref.onAfterOpen,
    onClose = _ref.onClose,
    controlledSetOpen = _ref.setOpen,
    CustomSurface = _ref.Surface,
    placement = _ref.placement,
    id = _ref.id,
    surfaceProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    uncontrolledIsOpen = _useState2[0],
    setUncontrolledIsOpen = _useState2[1];
  var isControlled = (0, _utils.useControlWarn)({
    controllingProps: ['setOpen'],
    isControlledCheck: function isControlledCheck() {
      return controlledSetOpen !== undefined;
    },
    name: 'useDialog'
  });
  if (Boolean(onClose) && Boolean(controlledSetOpen)) {
    throw new Error('useDialog does not support setting both `setOpen` and `onClose`. Use just `setOpen`');
  }
  var isPartiallyControlled = controlledIsOpen !== undefined;
  var isOpen = isPartiallyControlled || isControlled ? controlledIsOpen || false : uncontrolledIsOpen;
  var _useAnimationState = (0, _utils.useAnimationState)({
      enter: defaultOpen ? 'none' : undefined,
      isOpen: isOpen,
      onAfterEntered: onAfterOpen,
      onAfterExited: onAfterClose
    }),
    busy = _useAnimationState.busy,
    className = _useAnimationState.className,
    renderDOM = _useAnimationState.renderDOM;
  var setOpen = isControlled && controlledSetOpen ? controlledSetOpen : setUncontrolledIsOpen;
  var _useFocusTrap = (0, _utils.useFocusTrap)({
      clickOutsideDeactivates: true
    }),
    _useFocusTrap2 = _slicedToArray(_useFocusTrap, 2),
    focusRef = _useFocusTrap2[1];
  var _useScrollLock = (0, _utils.useScrollLock)({
      ref: focusRef
    }),
    _useScrollLock2 = _slicedToArray(_useScrollLock, 2),
    portalRef = _useScrollLock2[1];
  var handleOpen = function handleOpen() {
    return setOpen(true);
  };
  var handleClose = function handleClose() {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  };
  var RenderSurface = CustomSurface || _DialogSurface.DialogSurface;
  var dialogId = (0, _utils.useID)(id);
  var dialog = renderDOM && _react["default"].createElement(_DialogContext.DialogContext.Provider, {
    value: {
      busy: busy,
      closeModal: handleClose,
      id: dialogId
    }
  }, _react["default"].createElement(_Portal.Portal, {
    ref: portalRef
  }, _react["default"].createElement(_Backdrop.Backdrop, {
    className: className,
    onClick: handleClose
  }), _react["default"].createElement(RenderSurface, _extends({
    id: dialogId,
    "aria-labelledby": "".concat(dialogId, "-heading"),
    "aria-busy": busy ? true : undefined,
    className: className,
    placement: placement
  }, surfaceProps), content)));
  return {
    dialog: dialog,
    domProps: {
      'aria-expanded': isOpen,
      onClick: handleOpen,
      role: 'button'
    },
    isOpen: isOpen,
    setOpen: setOpen
  };
};
exports.useDialog = useDialog;
//# sourceMappingURL=useDialog.js.map