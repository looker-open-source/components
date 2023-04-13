"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateFontFamilies = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _pickBy = _interopRequireDefault(require("lodash/pickBy"));
var _identity = _interopRequireDefault(require("lodash/identity"));
var _fontFacesToFamily = require("./fontFacesToFamily");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var generateFontFamilies = function generateFontFamilies(defaultFonts, fallbacks, customFonts) {
  var fontFamilies = _objectSpread(_objectSpread({}, defaultFonts), (0, _pickBy["default"])(customFonts, _identity["default"]));
  Object.entries(fontFamilies).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      fontFace = _ref2[1];
    return fontFamilies[key] = (0, _fontFacesToFamily.fontFacesToFamily)(fontFace, fallbacks[key]);
  });
  return fontFamilies;
};
exports.generateFontFamilies = generateFontFamilies;
//# sourceMappingURL=generateFontFamilies.js.map