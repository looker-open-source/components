"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMeasuredElement = exports.measureElement = void 0;
var _react = require("react");
var _useResize = require("./useResize");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var mockDomRect = {
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
var measureElement = function measureElement(element) {
  if (element) return element.getBoundingClientRect();
  if (typeof DOMRect === 'function') return new DOMRect();
  return mockDomRect;
};
exports.measureElement = measureElement;
var useMeasuredElement = function useMeasuredElement(element) {
  var _useState = (0, _react.useState)(measureElement()),
    _useState2 = _slicedToArray(_useState, 2),
    rect = _useState2[0],
    setRect = _useState2[1];
  var refreshDomRect = (0, _react.useCallback)(function () {
    if (!element) return;
    setRect(measureElement(element));
  }, [element]);
  (0, _useResize.useResize)(element, refreshDomRect);
  return [rect, refreshDomRect];
};
exports.useMeasuredElement = useMeasuredElement;
//# sourceMappingURL=useMeasuredElement.js.map