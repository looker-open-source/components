"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDelayedState = useDelayedState;
var _react = require("react");
var _undefinedCoalesce = require("./undefinedCoalesce");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    _useReducer2 = _slicedToArray(_useReducer, 2),
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