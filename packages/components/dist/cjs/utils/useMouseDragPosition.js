"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMouseDragPosition = useMouseDragPosition;
var _react = require("react");
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _get = _interopRequireDefault(require("lodash/get"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useMouseDragPosition(targetRef) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMouseDown = _useState2[0],
    setIsMouseDown = _useState2[1];
  var _useState3 = (0, _react.useState)({
      x: 0,
      y: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    mousePos = _useState4[0],
    setMousePos = _useState4[1];
  var updateMousePos = function updateMousePos(e) {
    var event = (0, _get["default"])(e, 'touches[0]', e);
    var pageX = event.pageX,
      clientX = event.clientX,
      pageY = event.pageY,
      clientY = event.clientY;
    setMousePos({
      x: pageX || clientX,
      y: pageY || clientY
    });
  };
  var handleStart = function handleStart(e) {
    requestAnimationFrame(function () {
      setIsMouseDown(true);
    });
    updateMousePos(e);
  };
  var handleMove = (0, _throttle["default"])(updateMousePos, 100);
  var handleEnd = function handleEnd() {
    requestAnimationFrame(function () {
      setIsMouseDown(false);
    });
  };
  (0, _react.useEffect)(function () {
    targetRef && targetRef.addEventListener('mousedown', handleStart);
    targetRef && targetRef.addEventListener('touchstart', handleStart);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchend', handleEnd);
    if (isMouseDown) {
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseleave', handleEnd);
    }
    return function () {
      targetRef && targetRef.removeEventListener('mousedown', handleStart);
      targetRef && targetRef.removeEventListener('touchstart', handleStart);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchend', handleEnd);
      if (isMouseDown) {
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseleave', handleEnd);
      }
    };
  }, [isMouseDown, targetRef]);
  return {
    isMouseDown: isMouseDown,
    mousePos: mousePos
  };
}
//# sourceMappingURL=useMouseDragPosition.js.map