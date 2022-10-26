"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMouseDragPosition = useMouseDragPosition;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _get = _interopRequireDefault(require("lodash/get"));

function useMouseDragPosition(targetRef) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isMouseDown = _useState2[0],
      setIsMouseDown = _useState2[1];

  var _useState3 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
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