"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallbackRef = useCallbackRef;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useForkedRef = require("./useForkedRef");

function useCallbackRef(forwardedRef) {
  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentElement = _useState2[0],
      setCurrentElement = _useState2[1];

  var callbackRef = (0, _react.useCallback)(function (node) {
    setCurrentElement(node);
  }, []);
  var forkedRef = (0, _useForkedRef.useForkedRef)(forwardedRef, callbackRef);
  return [currentElement, forkedRef];
}
//# sourceMappingURL=useCallbackRef.js.map