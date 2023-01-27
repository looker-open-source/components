"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMeasuredText = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _noop = _interopRequireDefault(require("lodash/noop"));

var useMeasuredText = function useMeasuredText(text, theme) {
  var fontSize = theme.fontSize,
    fontFamily = theme.fontFamily;
  var _useState = (0, _react.useState)({
      bottom: 0,
      height: 10,
      left: 0,
      right: 0,
      toJSON: _noop["default"],
      top: 0,
      width: 10,
      x: 0,
      y: 0
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    elementRect = _useState2[0],
    setElementRect = _useState2[1];
  (0, _react.useLayoutEffect)(function () {
    var textWrapper = document.createElement('SPAN');
    var textNode = document.createTextNode(text);
    textWrapper.style.fontSize = typeof fontSize === 'number' ? "".concat(fontSize, "px") : fontSize;
    textWrapper.style.fontFamily = fontFamily;
    textWrapper.appendChild(textNode);
    document.body.appendChild(textWrapper);

    var componentIsMounted = true;
    var req = requestAnimationFrame(function () {
      if (componentIsMounted) {
        var _elementRect = textWrapper.getBoundingClientRect();
        setElementRect(_elementRect);
        document.body.removeChild(textWrapper);
      }
    });
    return function () {
      componentIsMounted = false;
      cancelAnimationFrame(req);
      if (document.body.contains(textWrapper)) {
        document.body.removeChild(textWrapper);
      }
    };
  }, [text, fontFamily, fontSize]);
  return elementRect;
};
exports.useMeasuredText = useMeasuredText;
//# sourceMappingURL=useMeasuredText.js.map