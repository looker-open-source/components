"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.googleFontUrl = exports.googleFontParam = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _excluded = ["family", "italic"];
var googleFontsBaseUrl = 'https://fonts.googleapis.com/css2';

var googleFontParam = function googleFontParam(_ref) {
  var family = _ref.family,
      _ref$italic = _ref.italic,
      italic = _ref$italic === void 0 ? true : _ref$italic,
      font = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var uri = "".concat(family.replace(/"/g, '').replace(/ /g, '+'), ":");
  var weights = font.weights.map(function (weight) {
    return "0,".concat(weight);
  });

  if (italic) {
    var italicizedWeights = font.weights.map(function (weight) {
      return "1,".concat(weight);
    });
    weights = [].concat((0, _toConsumableArray2["default"])(weights), (0, _toConsumableArray2["default"])(italicizedWeights));
    uri += 'ital,';
  }

  uri += "wght@".concat(weights.join(';'));
  return uri;
};

exports.googleFontParam = googleFontParam;

var googleFontUrl = function googleFontUrl(theme) {
  var url = new URL(googleFontsBaseUrl);
  var weights = Object.values(theme.fontWeights);
  var fonts = Object.values(theme.fonts).map(function (family) {
    return {
      family: family.split(',')[0].replace(/'/g, ''),
      weights: weights
    };
  });
  var search = fonts.map(function (font) {
    return "family=".concat(googleFontParam(font));
  });
  search.push('display=swap');
  url.search = search.join('&');
  return url.toString();
};

exports.googleFontUrl = googleFontUrl;
//# sourceMappingURL=googleFontUrl.js.map