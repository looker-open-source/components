"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popoverPropKeys = exports.Popover = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../utils");

var _usePopover2 = require("./usePopover");

var _excluded = ["children", "hoverDisclosureRef"],
    _excluded2 = ["onClick", "ref"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var isRenderProp = function isRenderProp(children) {
  return typeof children === 'function';
};

var popoverPropKeys = ['content', 'onClose', 'placement', 'portalElement', 'pin', 'disableScrollLock', 'triggerElement', 'focusTrap', 'scrollLock', 'surface', 'disabled', 'isOpen', 'canClose', 'setOpen', 'triggerToggle', 'cancelClickOutside', 'hoverDisclosureRef', 'ariaLabel'];
exports.popoverPropKeys = popoverPropKeys;
var Popover = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
      hoverDisclosureRef = _ref.hoverDisclosureRef,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _usePopover = (0, _usePopover2.usePopover)(props),
      domProps = _usePopover.domProps,
      isOpen = _usePopover.isOpen,
      popover = _usePopover.popover;

  var onClick = domProps.onClick,
      popoverRef = domProps.ref,
      restDomProps = (0, _objectWithoutProperties2["default"])(domProps, _excluded2);
  var ref = (0, _utils.useForkedRef)(popoverRef, forwardedRef);

  if ((0, _react.isValidElement)(children)) {
    children = (0, _react.cloneElement)(children, _objectSpread(_objectSpread({}, restDomProps), {}, {
      onClick: (0, _utils.mergeHandlers)(onClick, children.props.onClick),
      ref: ref
    }));
  } else if (isRenderProp(children)) {
    children = children(domProps);
  } else {
    console.warn("Element \"".concat((0, _typeof2["default"])(children), "\" can't be used as target for Popover"));
  }

  var _useHovered = (0, _utils.useHovered)(hoverDisclosureRef),
      _useHovered2 = (0, _slicedToArray2["default"])(_useHovered, 1),
      isHovered = _useHovered2[0];

  var triggerShown = isHovered || isOpen;
  return _react["default"].createElement(_react["default"].Fragment, null, popover, triggerShown && children);
});
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map