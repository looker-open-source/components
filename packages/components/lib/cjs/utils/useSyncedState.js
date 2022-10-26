"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSyncedState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useSyncedState = function useSyncedState(prop) {
  var _useState = (0, _react.useState)(prop),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var isMountedRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (isMountedRef.current) {
      setState(prop);
    }

    isMountedRef.current = true;
  }, [prop]);
  return [state, setState];
};

exports.useSyncedState = useSyncedState;
//# sourceMappingURL=useSyncedState.js.map