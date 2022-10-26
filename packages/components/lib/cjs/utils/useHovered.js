"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHovered = useHovered;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _getCurrentNode = require("./getCurrentNode");

var _useCallbackRef3 = require("./useCallbackRef");

function useHovered(hoverElement) {
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      newElement = _useCallbackRef2[0],
      callbackRef = _useCallbackRef2[1];

  var element = typeof hoverElement === 'undefined' ? newElement : hoverElement;

  var _useState = (0, _react.useState)(hoverElement === undefined),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  (0, _react.useEffect)(function () {
    function handleMouseEnter() {
      setIsHovered(true);
    }

    function handleMouseLeave() {
      window.requestAnimationFrame(function () {
        var node = (0, _getCurrentNode.getCurrentNode)(element);
        var relationship = document.activeElement && node ? node.compareDocumentPosition(document.activeElement) : Node.DOCUMENT_POSITION_DISCONNECTED;
        var activeElementIsChildOfNode = relationship === Node.DOCUMENT_POSITION_FOLLOWING + Node.DOCUMENT_POSITION_CONTAINED_BY;
        if (!activeElementIsChildOfNode) setIsHovered(false);
      });
    }

    var node = (0, _getCurrentNode.getCurrentNode)(element);

    if (node) {
      node.addEventListener('mouseleave', handleMouseLeave);
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('focusout', handleMouseLeave);
      node.addEventListener('focusin', handleMouseEnter);
    }

    return function () {
      if (node) {
        node.removeEventListener('mouseleave', handleMouseLeave);
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('focusout', handleMouseLeave);
        node.removeEventListener('focusin', handleMouseEnter);
      }
    };
  }, [element]);
  return [isHovered, callbackRef];
}
//# sourceMappingURL=useHovered.js.map