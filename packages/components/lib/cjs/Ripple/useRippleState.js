"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRippleState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _styledComponents = require("styled-components");

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
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
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