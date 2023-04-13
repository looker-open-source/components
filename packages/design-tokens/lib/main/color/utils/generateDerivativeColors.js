"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDerivativeColors = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _blendPoints = require("../blendPoints");
var _generateStatefulColors = require("./generateStatefulColors");
var _mixColors = require("./mixColors");
var _mixScaledColors = require("./mixScaledColors");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var generateDerivativeColors = function generateDerivativeColors(_ref, _ref2) {
  var background = _ref.background,
    inform = _ref.inform,
    link = _ref.link,
    positive = _ref.positive,
    text = _ref.text,
    warn = _ref.warn,
    title = _ref.title,
    body = _ref.body;
  var text5 = _ref2.text5;
  var accents = {
    informAccent: (0, _mixScaledColors.mixScaledColors)(_generateStatefulColors.accentBlendScale, inform, background),
    positiveAccent: (0, _mixScaledColors.mixScaledColors)(_generateStatefulColors.accentBlendScale, positive, background),
    warnAccent: (0, _mixScaledColors.mixScaledColors)(_generateStatefulColors.accentBlendScale, warn, background)
  };
  return _objectSpread({
    body: body || text5,
    field: background,
    inverse: text,
    inverseOn: background,
    linkInteractive: (0, _generateStatefulColors.generateInteractive)(link),
    neutral: (0, _mixColors.mixColors)(_blendPoints.textBlends[1], text, background),
    title: title || text5
  }, accents);
};
exports.generateDerivativeColors = generateDerivativeColors;
//# sourceMappingURL=generateDerivativeColors.js.map