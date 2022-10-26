"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LegacySpaceRamp", {
  enumerable: true,
  get: function get() {
    return _types.LegacySpaceRamp;
  }
});
Object.defineProperty(exports, "SpaceRamp", {
  enumerable: true,
  get: function get() {
    return _types.SpaceRamp;
  }
});
Object.defineProperty(exports, "SpacingSizes", {
  enumerable: true,
  get: function get() {
    return _types.SpacingSizes;
  }
});
Object.defineProperty(exports, "UnitRamp", {
  enumerable: true,
  get: function get() {
    return _types.UnitRamp;
  }
});
Object.defineProperty(exports, "UnitSizes", {
  enumerable: true,
  get: function get() {
    return _types.UnitSizes;
  }
});
exports.units = exports.space = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("./types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var legacySpacing = {
  none: '0rem',
  xxxsmall: '0.125rem',
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '2rem',
  xxlarge: '2.5rem',
  xxxlarge: '3.75rem',
  xxxxlarge: '5rem'
};
var units = {
  none: '0rem',
  u05: '0.125rem',
  u1: '0.25rem',
  u2: '0.5rem',
  u3: '0.75rem',
  u4: '1rem',
  u5: '1.25rem',
  u6: '1.5rem',
  u7: '1.75rem',
  u8: '2rem',
  u9: '2.25rem',
  u10: '2.5rem',
  u11: '2.75rem',
  u12: '3rem',
  u13: '3.25rem',
  u14: '3.5rem',
  u15: '3.75rem',
  u16: '4em'
};
exports.units = units;

var space = _objectSpread(_objectSpread({}, legacySpacing), units);

exports.space = space;
//# sourceMappingURL=index.js.map