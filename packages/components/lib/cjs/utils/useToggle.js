"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToggle = useToggle;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'ON':
      return true;

    case 'OFF':
      return false;

    case 'TOGGLE':
      return !state;

    case 'CHANGE':
      return action.payload || false;
  }
};

function useToggle() {
  var initialValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useReducer = (0, _react.useReducer)(reducer, initialValue),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      value = _useReducer2[0],
      dispatch = _useReducer2[1];

  var setOn = (0, _react.useCallback)(function () {
    return dispatch({
      type: 'ON'
    });
  }, []);
  var setOff = (0, _react.useCallback)(function () {
    return dispatch({
      type: 'OFF'
    });
  }, []);
  var toggle = (0, _react.useCallback)(function () {
    return dispatch({
      type: 'TOGGLE'
    });
  }, []);
  var change = (0, _react.useCallback)(function (payload) {
    return dispatch({
      payload: payload,
      type: 'CHANGE'
    });
  }, []);
  (0, _react.useEffect)(function () {
    dispatch({
      payload: initialValue,
      type: 'CHANGE'
    });
  }, [initialValue]);
  return {
    change: change,
    setOff: setOff,
    setOn: setOn,
    toggle: toggle,
    value: value
  };
}
//# sourceMappingURL=useToggle.js.map