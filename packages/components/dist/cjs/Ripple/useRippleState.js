"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRippleState = void 0;
var _react = require("react");
var _styledComponents = require("styled-components");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return 'IN';
    case 'END':
      return state === 'IN' ? 'OUT' : state;
    case 'DONE':
      return 'OFF';
  }
};
var getRippleClassName = function getRippleClassName(rippling) {
  if (rippling === 'IN') {
    return 'fg-in';
  } else if (rippling === 'OUT') {
    return 'fg-out';
  }
  return '';
};
var useRippleState = function useRippleState() {
  var _useReducer = (0, _react.useReducer)(reducer, 'OFF'),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    rippling = _useReducer2[0],
    dispatch = _useReducer2[1];
  var isInRef = (0, _react.useRef)(false);
  var isLockedRef = (0, _react.useRef)(false);
  var _useTheme = (0, _styledComponents.useTheme)(),
    _useTheme$transitions = _useTheme.transitions,
    quick = _useTheme$transitions.quick,
    simple = _useTheme$transitions.simple;
  var start = (0, _react.useCallback)(function () {
    dispatch({
      type: 'START'
    });
    isInRef.current = true;
  }, []);
  var end = (0, _react.useCallback)(function () {
    isInRef.current = false;
    if (!isLockedRef.current) {
      dispatch({
        type: 'END'
      });
    }
  }, []);
  (0, _react.useEffect)(function () {
    var t;
    if (rippling === 'IN') {
      isLockedRef.current = true;
      t = setTimeout(function () {
        isLockedRef.current = false;
        if (!isInRef.current) {
          dispatch({
            type: 'END'
          });
        }
      }, simple);
    }
    if (rippling === 'OUT') {
      t = setTimeout(function () {
        dispatch({
          type: 'DONE'
        });
      }, quick);
    }
    return function () {
      clearTimeout(t);
    };
  }, [rippling, quick, simple]);
  return {
    className: getRippleClassName(rippling),
    end: end,
    start: start
  };
};
exports.useRippleState = useRippleState;
//# sourceMappingURL=useRippleState.js.map