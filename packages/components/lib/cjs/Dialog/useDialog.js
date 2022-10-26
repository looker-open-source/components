"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDialog = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Portal = require("../Portal");

var _utils = require("../utils");

var _Backdrop = require("./Backdrop");

var _DialogContext = require("./DialogContext");

var _DialogSurface = require("./DialogSurface");

var _excluded = ["content", "defaultOpen", "isOpen", "canClose", "onAfterClose", "onAfterOpen", "onClose", "setOpen", "Surface", "placement", "id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      surfaceProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      _useFocusTrap2 = (0, _slicedToArray2["default"])(_useFocusTrap, 2),
      focusRef = _useFocusTrap2[1];

  var _useScrollLock = (0, _utils.useScrollLock)({
    ref: focusRef
  }),
      _useScrollLock2 = (0, _slicedToArray2["default"])(_useScrollLock, 2),
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
  }), _react["default"].createElement(RenderSurface, (0, _extends2["default"])({
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