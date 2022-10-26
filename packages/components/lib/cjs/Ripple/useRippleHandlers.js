"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRippleHandlers = exports.rippleHandlerKeys = void 0;

var _react = require("react");

var _utils = require("../utils");

var rippleHandlerKeys = ['onBlur', 'onFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseUp'];
exports.rippleHandlerKeys = rippleHandlerKeys;

var useRippleHandlers = function useRippleHandlers(_ref, currentHandlers, disabled) {
  var startBG = _ref.startBG,
      endBG = _ref.endBG,
      startFG = _ref.startFG,
      endFG = _ref.endFG;
  var handleKeyDown = (0, _react.useCallback)(function (e) {
    switch (e.key) {
      case 'Enter':
      case ' ':
        startFG();
        break;
    }
  }, [startFG]);
  var handleMouseLeave = (0, _react.useCallback)(function () {
    endBG();
    endFG();
  }, [endFG, endBG]);
  var wrappedCallbacks = {
    onBlur: (0, _utils.useWrapEvent)(endBG, currentHandlers.onBlur),
    onFocus: (0, _utils.useWrapEvent)(startBG, currentHandlers.onFocus),
    onKeyDown: (0, _utils.useWrapEvent)(handleKeyDown, currentHandlers.onKeyDown),
    onKeyUp: (0, _utils.useWrapEvent)(endFG, currentHandlers.onKeyUp),
    onMouseDown: (0, _utils.useWrapEvent)(startFG, currentHandlers.onMouseDown),
    onMouseEnter: (0, _utils.useWrapEvent)(startBG, currentHandlers.onMouseEnter),
    onMouseLeave: (0, _utils.useWrapEvent)(handleMouseLeave, currentHandlers.onMouseLeave),
    onMouseUp: (0, _utils.useWrapEvent)(endFG, currentHandlers.onMouseUp)
  };
  return disabled ? {} : wrappedCallbacks;
};

exports.useRippleHandlers = useRippleHandlers;
//# sourceMappingURL=useRippleHandlers.js.map