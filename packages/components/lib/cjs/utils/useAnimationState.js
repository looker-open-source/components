"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAnimationState = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _designTokens = require("@looker/design-tokens");

var _react = require("react");

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
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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