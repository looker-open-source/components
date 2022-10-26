"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTheme = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _color = require("../../color");

var _tokens = require("../../tokens");

var _defaults = require("../../defaults");

var _typography = require("../../utils/typography");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var generateTheme = function generateTheme(theme, customizations) {
  if (!customizations) {
    return theme;
  }

  var fontSources = customizations.fontSources;
  var fonts = customizations.fontFamilies ? (0, _typography.generateFontFamilies)(theme.fonts, _tokens.defaultFontFallbacks, customizations.fontFamilies) : theme.fonts;
  var colors = customizations.colors ? (0, _color.generateColors)(theme.colors, customizations.colors) : theme.colors;
  var defaults = customizations.defaults ? (0, _defaults.generateDefaults)(theme.defaults, customizations.defaults) : theme.defaults;
  return _objectSpread(_objectSpread({}, theme), {}, {
    colors: colors,
    defaults: defaults,
    fontSources: fontSources,
    fonts: fonts
  });
};

exports.generateTheme = generateTheme;
//# sourceMappingURL=generateTheme.js.map