"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePopoverToggle = void 0;
var _react = require("react");
var _useControlWarn = require("../utils/useControlWarn");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
    cancelClickOutside = _ref$cancelClickOutsi === void 0 ? false : _ref$cancelClickOutsi,
    _ref$allowTriggerClic = _ref.allowTriggerClick,
    allowTriggerClick = _ref$allowTriggerClic === void 0 ? false : _ref$allowTriggerClic;
  var _useState = (0, _react.useState)(controlledIsOpen),
    _useState2 = _slicedToArray(_useState, 2),
    uncontrolledIsOpen = _useState2[0],
    uncontrolledSetOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
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
        if (!allowTriggerClick) {
          event.stopPropagation();
          event.preventDefault();
        }
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
  }, [cancelClickOutside, canClose, isOpen, setOpen, triggerElement, portalElement, triggerToggle, mouseDownTarget, allowTriggerClick]);
  return [isOpen, setOpen];
};
exports.usePopoverToggle = usePopoverToggle;
//# sourceMappingURL=usePopoverToggle.js.map