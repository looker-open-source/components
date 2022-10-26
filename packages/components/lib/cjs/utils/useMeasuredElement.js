"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMeasuredElement = exports.measureElement = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useResize = require("./useResize");

var measureElement = function measureElement(element) {
  if (!element) {
    return typeof DOMRect === 'function' ? new DOMRect() : {
      bottom: 0,
      height: 0,
      left: 0,
      rect: {},
      right: 0,
      toJSON: function toJSON() {
        return null;
      },
      top: 0,
      width: 0,
      x: 0,
      y: 0
    };
  }

  return element.getBoundingClientRect();
};

exports.measureElement = measureElement;

var useMeasuredElement = function useMeasuredElement(element) {
  var _useState = (0, _react.useState)(measureElement()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      rect = _useState2[0],
      setRect = _useState2[1];

  var refreshDomRect = (0, _react.useCallback)(function () {
    element && setRect(measureElement(element));
  }, [element]);
  (0, _useResize.useResize)(element, refreshDomRect);
  return [rect, refreshDomRect];
};

exports.useMeasuredElement = useMeasuredElement;
//# sourceMappingURL=useMeasuredElement.js.map