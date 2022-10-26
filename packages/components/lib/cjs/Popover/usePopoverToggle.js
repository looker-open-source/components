"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopoverToggle = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useControlWarn = require("../utils/useControlWarn");

var isNodeInOrAfter = function isNodeInOrAfter(nodeA, nodeB) {
  var relationship = nodeA.compareDocumentPosition(nodeB);
  return relationship === Node.DOCUMENT_POSITION_FOLLOWING || relationship === Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY;
};

var usePopoverToggle = function usePopoverToggle(_ref, portalElement, triggerElement) {
  var _ref$isOpen = _ref.isOpen,
      controlledIsOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      controlledSetOpen = _ref.setOpen,
      canClose = _ref.canClose,
      triggerToggle = _ref.triggerToggle,
      _ref$cancelClickOutsi = _ref.cancelClickOutside,
      cancelClickOutside = _ref$cancelClickOutsi === void 0 ? false : _ref$cancelClickOutsi;

  var _useState = (0, _react.useState)(controlledIsOpen),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      uncontrolledIsOpen = _useState2[0],
      uncontrolledSetOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      mouseDownTarget = _useState4[0],
      setMouseDownTarget = _useState4[1];

  var isControlled = (0, _useControlWarn.useControlWarn)({
    controllingProps: ['setOpen'],
    isControlledCheck: function isControlledCheck() {
      return controlledSetOpen !== undefined;
    },
    name: 'usePopover'
  });
  var isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;
  var setOpen = isControlled && controlledSetOpen ? controlledSetOpen : uncontrolledSetOpen;
  (0, _react.useEffect)(function () {
    var checkCloseAndStopEvent = function checkCloseAndStopEvent(event) {
      if (canClose && !canClose()) return;

      if (portalElement && mouseDownTarget) {
        if (isNodeInOrAfter(portalElement, mouseDownTarget)) {
          return;
        }
      }

      if (portalElement && isNodeInOrAfter(portalElement, event.target)) {
        return;
      }

      var clickedOnToggle = triggerElement && triggerElement.contains(event.target);

      if (!triggerToggle && clickedOnToggle) {
        return;
      }

      setOpen(false);

      if (clickedOnToggle) {
        event.stopPropagation();
        event.preventDefault();
        return;
      }

      if (!cancelClickOutside) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    };

    var handleMouseDown = function handleMouseDown(event) {
      setMouseDownTarget(event.target);
      checkCloseAndStopEvent(event);
    };

    var handleClickOutside = function handleClickOutside(event) {
      checkCloseAndStopEvent(event);
      setMouseDownTarget(null);
    };

    var handleMouseUp = function handleMouseUp() {
      setMouseDownTarget(null);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleMouseDown, true);
      document.addEventListener('click', handleClickOutside, true);
    } else if (mouseDownTarget) {
      document.addEventListener('click', handleClickOutside, true);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return function () {
      document.removeEventListener('mousedown', handleMouseDown, true);
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cancelClickOutside, canClose, isOpen, setOpen, triggerElement, portalElement, triggerToggle, mouseDownTarget]);
  return [isOpen, setOpen];
};

exports.usePopoverToggle = usePopoverToggle;
//# sourceMappingURL=usePopoverToggle.js.map