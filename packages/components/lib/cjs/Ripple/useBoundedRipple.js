"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBoundedRipple = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _utils = require("../utils");

var _useRipple = require("./useRipple");

var _excluded = ["ref"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useBoundedRipple = function useBoundedRipple(_ref) {
  var forwardedRef = _ref.ref,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useCallbackRef = (0, _utils.useCallbackRef)(forwardedRef),
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      element = _useCallbackRef2[0],
      ref = _useCallbackRef2[1];

  var _useMeasuredElement = (0, _utils.useMeasuredElement)(element),
      _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 1),
      _useMeasuredElement2$ = _useMeasuredElement2[0],
      height = _useMeasuredElement2$.height,
      width = _useMeasuredElement2$.width;

  var result = (0, _useRipple.useRipple)(_objectSpread(_objectSpread({}, props), {}, {
    bounded: true,
    height: height,
    width: width
  }));
  return _objectSpread(_objectSpread({}, result), {}, {
    ref: ref
  });
};

exports.useBoundedRipple = useBoundedRipple;
//# sourceMappingURL=useBoundedRipple.js.map