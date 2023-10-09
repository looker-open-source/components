"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressCircularSize = exports.progressCircularSVG = void 0;
var _designTokens = require("@looker/design-tokens");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var calculateValues = function calculateValues(half) {
  return {
    dashArray: half * 4.7,
    dashOffset: half * 2.3,
    half: half,
    radius: half / 1.34
  };
};
var progressCircularSVG = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    xsmall: _objectSpread({
      stroke: 2
    }, calculateValues(10)),
    small: _objectSpread({
      stroke: 2.5
    }, calculateValues(12)),
    medium: _objectSpread({
      stroke: 3
    }, calculateValues(18)),
    large: _objectSpread({
      stroke: 4
    }, calculateValues(24))
  }
});
exports.progressCircularSVG = progressCircularSVG;
var progressCircularSize = (0, _designTokens.variant)({
  prop: 'size',
  variants: {
    xsmall: {
      height: '20px',
      width: '20px'
    },
    small: {
      height: '24px',
      width: '24px'
    },
    medium: {
      height: '36px',
      width: '36px'
    },
    large: {
      height: '48px',
      width: '48px'
    }
  }
});
exports.progressCircularSize = progressCircularSize;
//# sourceMappingURL=size.js.map