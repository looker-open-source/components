"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateStatefulColors = exports.generateStatefulColor = exports.generatePressed = exports.generateInteractive = exports.generateExtendedStatefulColors = exports.accentBlendScale = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _darken = _interopRequireDefault(require("polished/lib/color/darken"));

var _lighten = _interopRequireDefault(require("polished/lib/color/lighten"));

var _mixScaledColors = require("./mixScaledColors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var generateInteractive = function generateInteractive(color) {
  return (0, _lighten["default"])(0.04, color);
};

exports.generateInteractive = generateInteractive;

var generatePressed = function generatePressed(color) {
  return (0, _darken["default"])(0.07, color);
};

exports.generatePressed = generatePressed;
var accentBlendScale = 16;
exports.accentBlendScale = accentBlendScale;

var generateStatefulColor = function generateStatefulColor(background, color) {
  return {
    subtle: (0, _mixScaledColors.mixScaledColors)(10, color, background),
    accent: (0, _mixScaledColors.mixScaledColors)(accentBlendScale, color, background),
    focus: (0, _mixScaledColors.mixScaledColors)(60, color, background),
    interactive: generateInteractive(color),
    pressed: generatePressed(color),
    text: background,
    border: color
  };
};

exports.generateStatefulColor = generateStatefulColor;

var generateExtendedStatefulColors = function generateExtendedStatefulColors(specifiable) {
  var background = specifiable.background,
      calculation = specifiable.calculation,
      dimension = specifiable.dimension,
      measure = specifiable.measure;
  var calculationColors = generateStatefulColor(background, calculation);
  var dimensionColors = generateStatefulColor(background, dimension);
  var measureColors = generateStatefulColor(background, measure);
  return {
    calculationSubtle: calculationColors.subtle,
    calculationAccent: calculationColors.accent,
    calculationFocus: calculationColors.focus,
    calculationInteractive: calculationColors.interactive,
    calculationPressed: calculationColors.pressed,
    calculationText: calculationColors.text,
    calculationBorder: calculationColors.border,
    dimensionSubtle: dimensionColors.subtle,
    dimensionAccent: dimensionColors.accent,
    dimensionFocus: dimensionColors.focus,
    dimensionInteractive: dimensionColors.interactive,
    dimensionPressed: dimensionColors.pressed,
    dimensionText: dimensionColors.text,
    dimensionBorder: dimensionColors.border,
    measureSubtle: measureColors.subtle,
    measureAccent: measureColors.accent,
    measureFocus: measureColors.focus,
    measureInteractive: measureColors.interactive,
    measurePressed: measureColors.pressed,
    measureText: measureColors.text,
    measureBorder: measureColors.border
  };
};

exports.generateExtendedStatefulColors = generateExtendedStatefulColors;

var generateStatefulColors = function generateStatefulColors(specifiable, derivatives) {
  var background = specifiable.background,
      key = specifiable.key,
      critical = specifiable.critical;
  var neutral = derivatives.neutral;
  var extendedStatefulColors = generateExtendedStatefulColors(specifiable);
  var keyColors = generateStatefulColor(background, key);
  var criticalColors = generateStatefulColor(background, critical);
  var neutralColors = generateStatefulColor(background, neutral);
  return _objectSpread({
    keySubtle: keyColors.subtle,
    keyAccent: keyColors.accent,
    keyFocus: keyColors.focus,
    keyInteractive: keyColors.interactive,
    keyPressed: keyColors.pressed,
    keyText: keyColors.text,
    keyBorder: keyColors.border,
    criticalSubtle: criticalColors.subtle,
    criticalAccent: criticalColors.accent,
    criticalFocus: criticalColors.focus,
    criticalInteractive: criticalColors.interactive,
    criticalPressed: criticalColors.pressed,
    criticalText: criticalColors.text,
    criticalBorder: criticalColors.border,
    neutralSubtle: neutralColors.subtle,
    neutralAccent: neutralColors.accent,
    neutralFocus: neutralColors.focus,
    neutralInteractive: neutralColors.interactive,
    neutralPressed: neutralColors.pressed,
    neutralText: neutralColors.text,
    neutralBorder: neutralColors.border
  }, extendedStatefulColors);
};

exports.generateStatefulColors = generateStatefulColors;
//# sourceMappingURL=generateStatefulColors.js.map