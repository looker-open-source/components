"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTooltip = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _Portal = require("../Portal");
var _Dialog = require("../Dialog");
var _TooltipContent = require("./TooltipContent");
var _TooltipSurface = require("./TooltipSurface");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var noop = function noop() {};
var useTooltip = function useTooltip(_ref) {
  var canClose = _ref.canClose,
    canOpen = _ref.canOpen,
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
    _useState2 = _slicedToArray(_useState, 2),
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
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    surfaceElement = _useCallbackRef2[0],
    surfaceCallbackRef = _useCallbackRef2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
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
    var popper = renderDOM && content && !disabled ? _react["default"].createElement(_Dialog.DialogContext.Provider, {
      value: {
        busy: busy,
        closeModal: handleClose,
        id: guaranteedId
      }
    }, _react["default"].createElement(_Portal.Portal, null, _react["default"].createElement(_TooltipSurface.TooltipSurface, {
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
    }, content)))) : null;
    var handleOpen = function handleOpen(e) {
      setTriggerElement(e.currentTarget);
      var currentElement = triggerElement !== null && triggerElement !== void 0 ? triggerElement : e.currentTarget;
      var shouldOpen = canOpen ? canOpen(currentElement) : true;
      if (shouldOpen && !disabled && (!currentElement || !currentElement.dataset.notooltip)) {
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
        ref: initializeOpen ? setTriggerElement : noop
      }),
      popperInstanceRef: popperInstanceRef,
      tooltip: popper
    };
  }, [busy, className, canOpen, content, disabled, guaranteedId, handleClose, handleMouseOut, initializeOpen, invert, maxWidth, placement, popperInstanceRef, ref, renderDOM, style, textAlign, triggerElement, width, ariaDescribedById]);
};
exports.useTooltip = useTooltip;
//# sourceMappingURL=useTooltip.js.map