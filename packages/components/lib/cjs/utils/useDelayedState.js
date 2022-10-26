"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDelayedState = useDelayedState;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _undefinedCoalesce = require("./undefinedCoalesce");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? {} : _ref$payload;

  switch (type) {
    case 'CHANGE':
      return {
        delay: false,
        futureValue: undefined,
        value: (0, _undefinedCoalesce.undefinedCoalesce)([payload.value, state.futureValue])
      };

    case 'WAIT_CHANGE':
      return {
        delay: state.delay,
        futureValue: state.delay ? payload.value : undefined,
        value: state.delay ? state.value : payload.value || state.value
      };

    case 'DELAY_CHANGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        delay: state.value === payload.value ? false : payload.delay || 0,
        futureValue: payload.value,
        value: state.value
      });
  }
};

function useDelayedState(initialValue) {
  var _useReducer = (0, _react.useReducer)(reducer, {
    delay: false,
    value: initialValue
  }),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      delay = _useReducer2$.delay,
      value = _useReducer2$.value,
      dispatch = _useReducer2[1];

  var change = (0, _react.useCallback)(function (newValue) {
    return dispatch({
      payload: {
        value: newValue
      },
      type: 'CHANGE'
    });
  }, []);
  var delayChange = (0, _react.useCallback)(function (newValue, delay) {
    return dispatch({
      payload: {
        delay: delay,
        value: newValue
      },
      type: 'DELAY_CHANGE'
    });
  }, []);
  var waitChange = (0, _react.useCallback)(function (newValue) {
    return dispatch({
      payload: {
        value: newValue
      },
      type: 'WAIT_CHANGE'
    });
  }, []);
  (0, _react.useEffect)(function () {
    var t;

    if (delay !== false) {
      t = setTimeout(function () {
        dispatch({
          type: 'CHANGE'
        });
      }, delay);
    }

    return function () {
      clearTimeout(t);
    };
  }, [delay]);
  return {
    change: change,
    delayChange: delayChange,
    value: value,
    waitChange: waitChange
  };
}
//# sourceMappingURL=useDelayedState.js.map