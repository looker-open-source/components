"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColors = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _identity = _interopRequireDefault(require("lodash/identity"));

var _generateBlendColors = require("./generateBlendColors");

var _generateDerivativeColors = require("./generateDerivativeColors");

var _generateStatefulColors = require("./generateStatefulColors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var generateColors = function generateColors(themeColors, customColors) {
  var specifiable = _objectSpread(_objectSpread({}, themeColors), (0, _pickBy["default"])(customColors, _identity["default"]));

  if (customColors && customColors.text) {
    if (!customColors.body) {
      specifiable.body = undefined;
    }

    if (!customColors.title) {
      specifiable.title = undefined;
    }
  }

  var blends = (0, _generateBlendColors.generateBlendColors)(specifiable);
  var derivatives = (0, _generateDerivativeColors.generateDerivativeColors)(specifiable, blends);
  var statefulColors = (0, _generateStatefulColors.generateStatefulColors)(specifiable, derivatives);
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, specifiable), derivatives), blends), statefulColors);
};

exports.generateColors = generateColors;
//# sourceMappingURL=generateColors.js.map