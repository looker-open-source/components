"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MovingTarget;
var _react = _interopRequireWildcard(require("react"));
var _PopoverContent = require("../Layout/PopoverContent");
var _usePopover2 = require("../usePopover");
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MovingTargetInner = function MovingTargetInner() {
  var _useToggle = (0, _.useToggle)(),
    value = _useToggle.value,
    toggle = _useToggle.toggle;
  var _usePopover = (0, _usePopover2.usePopover)({
      content: _react["default"].createElement(_PopoverContent.PopoverContent, {
        p: "u5",
        width: "360px"
      }, _react["default"].createElement(_.Paragraph, null, "The anchor is moving around so the Popover position must be updated via popperInstanceRef.current.update.")),
      placement: 'right-end'
    }),
    popover = _usePopover.popover,
    popperInstanceRef = _usePopover.popperInstanceRef,
    open = _usePopover.open,
    ref = _usePopover.ref,
    isOpen = _usePopover.isOpen;
  (0, _react.useEffect)(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [popperInstanceRef, value]);
  (0, _react.useEffect)(function () {
    var _int = setInterval(function () {
      toggle();
    }, 6000);
    return function () {
      clearInterval(_int);
    };
  }, [toggle]);
  return _react["default"].createElement(_.Box, {
    mt: "large"
  }, _react["default"].createElement(_.Heading, null, "Moving Target"), popover, _react["default"].createElement(_.Box, {
    mt: value ? 'xxxlarge' : 'medium',
    border: true,
    width: 150,
    p: "u3",
    cursor: "pointer",
    height: value ? 80 : undefined,
    onClick: open,
    ref: ref,
    className: isOpen ? 'active' : ''
  }, "Open Popover"));
};
function MovingTarget() {
  return _react["default"].createElement(MovingTargetInner, null);
}
//# sourceMappingURL=MovingTarget.js.map