"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallbackStateful = exports.fallbackBlends = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _palette = require("../legacy/palette");

var _defaultSpecifiableColors = require("./defaultSpecifiableColors");

var _utils = require("./utils");

var _generateStatefulColors = require("./utils/generateStatefulColors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var fallbackBlends = {
  ui1: _palette.charcoal100,
  ui2: _palette.charcoal200,
  ui3: _palette.charcoal300,
  ui4: _palette.charcoal400,
  ui5: _palette.charcoal800,
  text1: _palette.charcoal400,
  text2: _palette.charcoal500,
  text3: _palette.charcoal600,
  text4: _palette.charcoal700,
  text5: _palette.charcoal800
};
exports.fallbackBlends = fallbackBlends;

var fallbackStateful = _objectSpread({
  keySubtle: _palette.purple000,
  keyAccent: _palette.purple100,
  keyFocus: _palette.purple300,
  keyInteractive: (0, _utils.generateInteractive)(_palette.purple400),
  keyPressed: (0, _utils.generatePressed)(_palette.purple400),
  keyText: _palette.white,
  keyBorder: _palette.purple400,
  criticalSubtle: _palette.red000,
  criticalAccent: _palette.red100,
  criticalFocus: _palette.red300,
  criticalInteractive: (0, _utils.generateInteractive)(_palette.red500),
  criticalPressed: (0, _utils.generatePressed)(_palette.red500),
  criticalText: _palette.white,
  criticalBorder: _palette.red400,
  neutralSubtle: _palette.charcoal000,
  neutralAccent: _palette.charcoal100,
  neutralFocus: _palette.charcoal300,
  neutralInteractive: (0, _utils.generateInteractive)(_palette.charcoal500),
  neutralPressed: (0, _utils.generatePressed)(_palette.charcoal500),
  neutralText: _palette.white,
  neutralBorder: _palette.charcoal400
}, (0, _generateStatefulColors.generateExtendedStatefulColors)(_defaultSpecifiableColors.defaultSpecifiableColors));

exports.fallbackStateful = fallbackStateful;
//# sourceMappingURL=fallbacks.js.map