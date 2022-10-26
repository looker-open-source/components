"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMouseDownClick = useMouseDownClick;

var _react = require("react");

function useMouseDownClick(onMouseDownClick, onMouseUp) {
  var mouseDownTriggered = (0, _react.useRef)(false);
  var handleMouseUp = (0, _react.useCallback)(function (e) {
    window.requestAnimationFrame(function () {
      mouseDownTriggered.current = false;
      onMouseUp && onMouseUp(e);
    });
  }, [onMouseUp]);
  (0, _react.useEffect)(function () {
    return function () {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);
  return {
    onClick: (0, _react.useCallback)(function (e) {
      if (!mouseDownTriggered.current) {
        onMouseDownClick(e);
      }
    }, [onMouseDownClick]),
    onMouseDown: (0, _react.useCallback)(function (e) {
      mouseDownTriggered.current = true;
      onMouseDownClick(e);
      document.addEventListener('mouseup', handleMouseUp);
    }, [handleMouseUp, onMouseDownClick])
  };
}
//# sourceMappingURL=useMouseDownClick.js.map