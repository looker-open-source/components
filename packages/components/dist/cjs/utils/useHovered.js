"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHovered = useHovered;
var _react = require("react");
var _getCurrentNode = require("./getCurrentNode");
var _useCallbackRef3 = require("./useCallbackRef");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useHovered(hoverElement) {
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    newElement = _useCallbackRef2[0],
    callbackRef = _useCallbackRef2[1];
  var element = typeof hoverElement === 'undefined' ? newElement : hoverElement;
  var _useState = (0, _react.useState)(hoverElement === undefined),
    _useState2 = _slicedToArray(_useState, 2),
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