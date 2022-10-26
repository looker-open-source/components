"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOverflow = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useResize = require("../useResize");

var _useCallbackRef3 = require("../useCallbackRef");

var useOverflow = function useOverflow(ref) {
  var _useCallbackRef = (0, _useCallbackRef3.useCallbackRef)(ref),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      callbackRef = _useCallbackRef2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hasOverflow = _useState2[0],
      setHasOverflow = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var handleResize = function handleResize() {
    if (element) {
      setHeight(element.offsetHeight);
    }
  };

  (0, _useResize.useResize)(element, handleResize);
  (0, _react.useEffect)(function () {
    if (element) {
      setHasOverflow(element.offsetHeight < element.scrollHeight);
    }
  }, [height, element]);
  return [hasOverflow, callbackRef];
};

exports.useOverflow = useOverflow;
//# sourceMappingURL=useOverflow.js.map