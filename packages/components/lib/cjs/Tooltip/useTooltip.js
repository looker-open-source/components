"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTooltip = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _Portal = require("../Portal");

var _TooltipContent = require("./TooltipContent");

var _TooltipSurface = require("./TooltipSurface");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var noop = function noop() {};

var useTooltip = function useTooltip(_ref) {
  var canClose = _ref.canClose,
      content = _ref.content,
      _ref$isOpen = _ref.isOpen,
      initializeOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      width = _ref.width,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '30rem' : _ref$maxWidth,
      textAlign = _ref.textAlign,
      disabled = _ref.disabled,
      id = _ref.id,
      invert = _ref.invert,
      triggerElement = _ref.triggerElement,
      _ref$placement = _ref.placement,
      propsPlacement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 'intricate' : _ref$delay,
      ariaDescribedById = _ref.ariaDescribedById;

  var _useState = (0, _react.useState)(initializeOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useAnimationState = (0, _utils.useAnimationState)({
    enter: delay,
    exit: 'none',
    isOpen: isOpen
  }),
      busy = _useAnimationState.busy,
      className = _useAnimationState.className,
      renderDOM = _useAnimationState.renderDOM;

  var _useCallbackRef = (0, _utils.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      surfaceElement = _useCallbackRef2[0],
      surfaceCallbackRef = _useCallbackRef2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      newTriggerElement = _useState4[0],
      setTriggerElement = _useState4[1];

  var element = triggerElement !== null && triggerElement !== void 0 ? triggerElement : newTriggerElement;
  var handleClose = (0, _react.useCallback)(function () {
    if (canClose && !canClose()) return;
    setIsOpen(false);
  }, [canClose]);
  var handleMouseOut = (0, _react.useCallback)(function (event) {
    if (!isOpen) return;
    var related = event.relatedTarget;

    if (element && (element === related || element.contains(related))) {
      return;
    }

    if (surfaceElement && (surfaceElement === related || surfaceElement.contains(related))) {
      return;
    }

    window.requestAnimationFrame(function () {
      handleClose();
    });
  }, [element, surfaceElement, isOpen, handleClose]);
  var usePopperProps = (0, _react.useMemo)(function () {
    return {
      anchor: element,
      options: {
        modifiers: [{
          enabled: true,
          name: 'flip',
          options: {
            flipVariations: true
          }
        }],
        placement: propsPlacement
      }
    };
  }, [element, propsPlacement]);

  var _usePopper = (0, _utils.usePopper)(usePopperProps),
      placement = _usePopper.placement,
      popperInstanceRef = _usePopper.popperInstanceRef,
      style = _usePopper.style,
      targetRef = _usePopper.targetRef;

  var ref = (0, _utils.useForkedRef)(targetRef, surfaceCallbackRef);
  var guaranteedId = (0, _utils.useID)(id);
  return (0, _react.useMemo)(function () {
    var popper = renderDOM && content && !disabled ? _react["default"].createElement(_Portal.Portal, null, _react["default"].createElement(_TooltipSurface.TooltipSurface, {
      "aria-busy": busy ? true : undefined,
      className: className,
      eventHandlers: {
        onMouseOut: handleMouseOut
      },
      placement: placement,
      ref: ref,
      style: style,
      maxWidth: maxWidth,
      invert: invert
    }, _react["default"].createElement(_TooltipContent.TooltipContent, {
      role: "tooltip",
      id: guaranteedId,
      width: width,
      textAlign: textAlign
    }, content))) : null;

    var handleOpen = function handleOpen(e) {
      setTriggerElement(e.currentTarget);
      var currentElement = triggerElement !== null && triggerElement !== void 0 ? triggerElement : e.currentTarget;

      if (!disabled && (!currentElement || !currentElement.dataset.notooltip)) {
        setIsOpen(true);
      }
    };

    var enabledDomProps = disabled ? {} : {
      'aria-describedby': renderDOM && content ? ariaDescribedById || guaranteedId : undefined,
      className: renderDOM ? 'hover' : undefined
    };
    return {
      domProps: _objectSpread(_objectSpread({}, enabledDomProps), {}, {
        onBlur: handleClose,
        onFocus: handleOpen,
        onMouseOut: handleMouseOut,
        onMouseOver: handleOpen,
        ref: noop
      }),
      popperInstanceRef: popperInstanceRef,
      tooltip: popper
    };
  }, [busy, className, content, disabled, guaranteedId, handleClose, handleMouseOut, invert, maxWidth, placement, popperInstanceRef, ref, renderDOM, style, textAlign, triggerElement, width, ariaDescribedById]);
};

exports.useTooltip = useTooltip;
//# sourceMappingURL=useTooltip.js.map