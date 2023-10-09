"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimationState = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var busyStates = ['entering', 'exiting'];
var useAnimationState = function useAnimationState(_ref) {
  var _ref$enter = _ref.enter,
    enter = _ref$enter === void 0 ? 'moderate' : _ref$enter,
    _ref$exit = _ref.exit,
    exit = _ref$exit === void 0 ? 'moderate' : _ref$exit,
    isOpen = _ref.isOpen,
    onAfterEntered = _ref.onAfterEntered,
    onAfterExited = _ref.onAfterExited;
  var _useState = (0, _react.useState)('exited'),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var timingEnter = _designTokens.transitions[enter];
  var timingExit = _designTokens.transitions[exit];
  (0, _react.useEffect)(function () {
    if (!isOpen && state === 'exited') return;
    if (isOpen && state === 'entered') return;
    var t;
    if (isOpen) {
      if (!timingEnter) {
        setState('entered');
      } else {
        setState('entering');
        t = setTimeout(function () {
          return setState('entered');
        }, timingEnter);
      }
    } else {
      if (!timingExit) {
        setState('exited');
      } else {
        setState('exiting');
        t = setTimeout(function () {
          return setState('exited');
        }, timingExit);
      }
    }
    return function () {
      t && clearTimeout(t);
    };
  }, [isOpen, timingEnter, timingExit, state]);
  var previousStateRef = (0, _react.useRef)(state);
  (0, _react.useEffect)(function () {
    if (state === 'entered' && previousStateRef.current !== 'entered') {
      onAfterEntered === null || onAfterEntered === void 0 ? void 0 : onAfterEntered();
    }
    if (state === 'exited' && previousStateRef.current !== 'exited') {
      onAfterExited === null || onAfterExited === void 0 ? void 0 : onAfterExited();
    }
    previousStateRef.current = state;
  }, [state, onAfterExited, onAfterEntered]);
  return {
    busy: busyStates.includes(state),
    className: state,
    renderDOM: state !== 'exited'
  };
};
exports.useAnimationState = useAnimationState;
//# sourceMappingURL=useAnimationState.js.map