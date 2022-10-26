"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopover = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Layout = require("../Layout");

var _Portal = require("../Portal");

var _Dialog = require("../Dialog");

var _OverlaySurface = require("../Overlay/OverlaySurface");

var _utils = require("../utils");

var _usePopoverToggle3 = require("./usePopoverToggle");

var _useVerticalSpace = require("./useVerticalSpace");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useOpenWithoutElement = function useOpenWithoutElement(isOpen, element) {
  var _useState = (0, _react.useState)(isOpen && element === null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      openWithoutElem = _useState2[0],
      setOpenWithoutElem = _useState2[1];

  (0, _react.useEffect)(function () {
    if (element && openWithoutElem) {
      setOpenWithoutElem(false);
    }
  }, [openWithoutElem, element]);
  return openWithoutElem;
};

var usePopover = function usePopover(_ref) {
  var ariaHaspopup = _ref['aria-haspopup'],
      canClose = _ref.canClose,
      content = _ref.content,
      disabled = _ref.disabled,
      _ref$pin = _ref.pin,
      pin = _ref$pin === void 0 ? false : _ref$pin,
      _ref$isOpen = _ref.isOpen,
      controlledIsOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      onClose = _ref.onClose,
      _ref$placement = _ref.placement,
      propsPlacement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      controlledSetOpen = _ref.setOpen,
      triggerElement = _ref.triggerElement,
      _ref$triggerToggle = _ref.triggerToggle,
      triggerToggle = _ref$triggerToggle === void 0 ? true : _ref$triggerToggle,
      _ref$focusTrap = _ref.focusTrap,
      focusTrap = _ref$focusTrap === void 0 ? true : _ref$focusTrap,
      _ref$scrollLock = _ref.scrollLock,
      scrollLock = _ref$scrollLock === void 0 ? true : _ref$scrollLock,
      cancelClickOutside = _ref.cancelClickOutside,
      ref = _ref.ref,
      surface = _ref.surface,
      width = _ref.width,
      id = _ref.id,
      ariaLabel = _ref.ariaLabel;

  var _useScrollLock = (0, _utils.useScrollLock)({
    disabled: !scrollLock
  }),
      _useScrollLock2 = (0, _slicedToArray2["default"])(_useScrollLock, 2),
      scrollElement = _useScrollLock2[0],
      scrollRef = _useScrollLock2[1];

  var _useFocusTrap = (0, _utils.useFocusTrap)({
    disabled: !focusTrap
  }),
      _useFocusTrap2 = (0, _slicedToArray2["default"])(_useFocusTrap, 2),
      focusRef = _useFocusTrap2[1];

  var _useCallbackRef = (0, _utils.useCallbackRef)(ref),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      newTriggerElement = _useCallbackRef2[0],
      callbackRef = _useCallbackRef2[1];

  var element = typeof triggerElement === 'undefined' ? newTriggerElement : triggerElement;

  var _usePopoverToggle = (0, _usePopoverToggle3.usePopoverToggle)({
    canClose: canClose,
    cancelClickOutside: cancelClickOutside,
    isOpen: controlledIsOpen,
    setOpen: controlledSetOpen,
    triggerToggle: triggerToggle
  }, scrollElement, element),
      _usePopoverToggle2 = (0, _slicedToArray2["default"])(_usePopoverToggle, 2),
      isOpen = _usePopoverToggle2[0],
      setOpen = _usePopoverToggle2[1];

  var openWithoutElem = useOpenWithoutElement(isOpen, element);

  var handleOpen = function handleOpen(event) {
    if (!element) {
      callbackRef(event.currentTarget);
    }

    if (!disabled) {
      setOpen(true);
    }

    event.stopPropagation();
    event.preventDefault();
  };

  var handleClose = (0, _react.useCallback)(function () {
    if (canClose && !canClose()) return;
    setOpen(false);
    onClose && onClose();
  }, [canClose, onClose, setOpen]);
  var usePopperProps = (0, _react.useMemo)(function () {
    return {
      anchor: element,
      options: {
        modifiers: [{
          enabled: !pin,
          name: 'flip',
          options: {
            flipVariations: true,
            flipVariationsByContent: true
          }
        }, {
          enabled: true,
          name: 'eventListeners',
          options: {
            scroll: false
          }
        }],
        placement: propsPlacement
      }
    };
  }, [element, pin, propsPlacement]);

  var _usePopper = (0, _utils.usePopper)(usePopperProps),
      placement = _usePopper.placement,
      popperInstanceRef = _usePopper.popperInstanceRef,
      style = _usePopper.style,
      targetRef = _usePopper.targetRef;

  var verticalSpace = (0, _useVerticalSpace.useVerticalSpace)(element, pin, propsPlacement, isOpen, style);
  var surfaceRef = (0, _utils.useForkedRef)(targetRef, focusRef);

  var _useCallbackRef3 = (0, _utils.useCallbackRef)(),
      _useCallbackRef4 = (0, _slicedToArray2["default"])(_useCallbackRef3, 2),
      containerElement = _useCallbackRef4[0],
      contentContainerRef = _useCallbackRef4[1];

  var SurfaceComponent = surface || _OverlaySurface.OverlaySurface;

  var _id = (0, _utils.useID)(id);

  var contextValue = (0, _react.useMemo)(function () {
    return {
      closeModal: handleClose,
      id: _id
    };
  }, [handleClose, _id]);

  var popover = content && !openWithoutElem && isOpen && !disabled && _react["default"].createElement(_Dialog.DialogContext.Provider, {
    value: contextValue
  }, _react["default"].createElement(_Portal.Portal, {
    ref: scrollRef
  }, _react["default"].createElement(SurfaceComponent, {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabel ? undefined : "".concat(_id, "-heading"),
    "aria-modal": true,
    maxWidth: width,
    placement: placement,
    ref: surfaceRef,
    role: "dialog",
    style: style
  }, _react["default"].createElement(_Layout.Flex, {
    alignItems: "flex-start",
    borderRadius: "inherit",
    flexDirection: "column",
    id: _id,
    maxHeight: "calc(".concat(verticalSpace - 10, "px - 1rem)"),
    overflowY: "auto",
    ref: contentContainerRef
  }, content))));

  return {
    contentContainer: containerElement,
    domProps: {
      'aria-expanded': isOpen,
      'aria-haspopup': content && !disabled ? ariaHaspopup : false,
      onClick: handleOpen,
      ref: callbackRef
    },
    isOpen: isOpen,
    open: handleOpen,
    popover: popover,
    popperInstanceRef: popperInstanceRef,
    ref: callbackRef
  };
};

exports.usePopover = usePopover;
//# sourceMappingURL=usePopover.js.map