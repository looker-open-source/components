"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.densityPositive1 = exports.densityNegative3 = exports.densityNegative2 = exports.densityNegative1 = exports.density0 = exports.densities = exports.accordionDimensions = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var densityPositive1 = {
  fontSize: 'medium',
  indicatorGap: 'u1',
  indicatorSize: 'medium'
};
exports.densityPositive1 = densityPositive1;
var density0 = _objectSpread(_objectSpread({}, densityPositive1), {}, {
  fontSize: 'small',
  indicatorSize: 'small'
});
exports.density0 = density0;
var densityNegative1 = _objectSpread({}, density0);
exports.densityNegative1 = densityNegative1;
var densityNegative2 = _objectSpread({}, densityNegative1);
exports.densityNegative2 = densityNegative2;
var densityNegative3 = _objectSpread(_objectSpread({}, densityNegative2), {}, {
  fontSize: 'xsmall',
  indicatorSize: 'xxsmall'
});
exports.densityNegative3 = densityNegative3;
var densities = {
  '-1': densityNegative1,
  '-2': densityNegative2,
  '-3': densityNegative3,
  '0': density0,
  '1': densityPositive1
};
exports.densities = densities;
var accordionDimensions = function accordionDimensions() {
  var density = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return densities[density];
};
exports.accordionDimensions = accordionDimensions;
//# sourceMappingURL=accordionDimensions.js.map