"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeepCompareMemoize = useDeepCompareMemoize;
exports.useEffectDeepEquals = void 0;
var _react = _interopRequireDefault(require("react"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function checkDeps(deps) {
  if (!deps || !deps.length) {
    throw new Error('useEffectDeepEquals should not be used with no dependencies. Use React.useEffect instead.');
  }
  if (deps.every(isPrimitive)) {
    throw new Error('useEffectDeepEquals should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
  }
}
function isPrimitive(val) {
  return val == null || /^[sbn]/.test(_typeof(val));
}
function useDeepCompareMemoize(value) {
  var ref = _react["default"].useRef(value);
  var signalRef = _react["default"].useRef(0);
  if (!(0, _isEqual["default"])(value, ref.current)) {
    ref.current = value;
    signalRef.current += 1;
  }
  return _react["default"].useMemo(function () {
    return ref.current;
  }, [signalRef.current]);
}
var useEffectDeepEquals = function useEffectDeepEquals(callback, dependencies) {
  if (process.env.NODE_ENV !== 'production') {
    checkDeps(dependencies);
  }
  return _react["default"].useEffect(callback, useDeepCompareMemoize(dependencies));
};
exports.useEffectDeepEquals = useEffectDeepEquals;
//# sourceMappingURL=useEffectDeepEquals.js.map