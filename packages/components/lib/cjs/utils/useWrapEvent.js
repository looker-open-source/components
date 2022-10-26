"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWrapEvent = useWrapEvent;

var _react = require("react");

function useWrapEvent(ourHandler, theirHandler) {
  return (0, _react.useCallback)(function (event) {
    theirHandler && theirHandler(event);

    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  }, [ourHandler, theirHandler]);
}
//# sourceMappingURL=useWrapEvent.js.map