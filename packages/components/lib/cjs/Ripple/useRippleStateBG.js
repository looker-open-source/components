"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRippleStateBG = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return state === 'ON' ? 'DOUBLE_ON' : 'ON';

    case 'END':
      return state === 'DOUBLE_ON' ? 'ON' : 'OFF';
  }
};

var useRippleStateBG = function useRippleStateBG() {
  var _useReducer = (0, _react.useReducer)(reducer, 'OFF'),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return {
    className: state === 'OFF' ? '' : 'bg-on',
    end: (0, _react.useCallback)(function () {
      dispatch({
        type: 'END'
      });
    }, []),
    start: (0, _react.useCallback)(function () {
      dispatch({
        type: 'START'
      });
    }, [])
  };
};

exports.useRippleStateBG = useRippleStateBG;
//# sourceMappingURL=useRippleStateBG.js.map