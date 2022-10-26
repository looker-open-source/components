"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTreeHandlers = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _utils = require("../../utils");

var useTreeHandlers = function useTreeHandlers(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  var onBlur = function onBlur(event) {
    var nextFocusTarget = event.relatedTarget;

    if (nextFocusTarget && !event.currentTarget.contains(nextFocusTarget)) {
      setHovered(false);
    }
  };

  var onFocus = (0, _utils.useWrapEvent)((0, _utils.useWrapEvent)(function () {
    return setHovered(true);
  }, props.onFocus));
  var onMouseEnter = (0, _utils.useWrapEvent)(function () {
    return setHovered(true);
  }, props.onMouseEnter);
  var onMouseLeave = (0, _utils.useWrapEvent)(function () {
    return setHovered(false);
  }, props.onMouseLeave);
  return {
    contentHandlers: {
      onFocus: onFocus
    },
    hovered: hovered,
    wrapperHandlers: {
      onBlur: onBlur,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }
  };
};

exports.useTreeHandlers = useTreeHandlers;
//# sourceMappingURL=useTreeHandlers.js.map