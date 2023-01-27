"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeSelectPopup = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@looker/components");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _react = _interopRequireDefault(require("react"));

var TreeSelectPopup = function TreeSelectPopup(_ref) {
  var anchorElement = _ref.anchorElement,
    isOpen = _ref.isOpen,
    setOpen = _ref.setOpen,
    children = _ref.children;
  var _React$useState = _react["default"].useState(),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    popupStyle = _React$useState2[0],
    setPopupStyle = _React$useState2[1];
  _react["default"].useEffect(function () {
    var onResize = (0, _debounce["default"])(function () {
      setPopupStyle(getPopupStyle(anchorElement));
    }, 200);
    window.addEventListener('resize', onResize);
    setPopupStyle(getPopupStyle(anchorElement));
    return function () {
      window.removeEventListener('resize', onResize);
    };
  }, [anchorElement]);
  var _usePopover = (0, _components.usePopover)({
      content: _react["default"].createElement(_components.PopoverContent, {
        style: popupStyle
      }, children),
      focusTrap: false,
      isOpen: isOpen,
      setOpen: setOpen,
      triggerElement: anchorElement,
      triggerToggle: false
    }),
    popover = _usePopover.popover;
  return popover || null;
};
exports.TreeSelectPopup = TreeSelectPopup;
var getPopupStyle = function getPopupStyle(anchor) {
  if (!anchor) return {};
  var rect = anchor.getBoundingClientRect();
  return {
    minWidth: rect.width + 'px',
    left: rect.left + 'px',
    top: rect.top + rect.height + 'px'
  };
};
//# sourceMappingURL=TreeSelectPopup.js.map