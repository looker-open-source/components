"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePanel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      headerProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(defaultOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
      _useTrapStack2 = (0, _slicedToArray2["default"])(_useTrapStack, 2),
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
  }, visibilityTrigger, _react["default"].createElement(_PanelHeader.PanelHeader, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1;\n  overflow: auto;\n"])));
//# sourceMappingURL=usePanel.js.map