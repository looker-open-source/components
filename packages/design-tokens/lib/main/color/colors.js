"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _generateDerivativeColors = require("./utils/generateDerivativeColors");
var _fallbacks = require("./fallbacks");
var _defaultSpecifiableColors = require("./defaultSpecifiableColors");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var derivedColors = (0, _generateDerivativeColors.generateDerivativeColors)(_defaultSpecifiableColors.defaultSpecifiableColors, _fallbacks.fallbackBlends);
var colors = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _defaultSpecifiableColors.defaultSpecifiableColors), derivedColors), _fallbacks.fallbackBlends), _fallbacks.fallbackStateful);
exports.colors = colors;
//# sourceMappingURL=colors.js.map