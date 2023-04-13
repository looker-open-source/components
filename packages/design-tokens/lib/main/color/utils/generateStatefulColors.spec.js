"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _colors = require("../colors");
var _defaults = require("../defaults");
var _fallbacks = require("../fallbacks");
var _generateDerivativeColors = require("./generateDerivativeColors");
var _generateStatefulColors = require("./generateStatefulColors");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var background = _colors.colors.background,
  key = _colors.colors.key;
var specifiableColors = _objectSpread(_objectSpread({}, _defaults.defaultCoreColors), _defaults.defaultIntentColors);
var derivedColors = (0, _generateDerivativeColors.generateDerivativeColors)(specifiableColors, _fallbacks.fallbackBlends);
describe('generateStatefulColors', function () {
  describe('generateStatefulColor', function () {
    test('text1', function () {
      expect((0, _generateStatefulColors.generateStatefulColor)(background, key)).toMatchInlineSnapshot({}, "\n        Object {\n          \"accent\": \"#e7e0fa\",\n          \"border\": \"#6C43E0\",\n          \"focus\": \"#a68eec\",\n          \"interactive\": \"#7a55e3\",\n          \"pressed\": \"#5424db\",\n          \"subtle\": \"#f0ecfb\",\n          \"text\": \"#FFFFFF\",\n        }\n      ");
    });
  });
  describe('enerateStatefulColors', function () {
    test('text1', function () {
      expect((0, _generateStatefulColors.generateStatefulColors)(specifiableColors, derivedColors)).toMatchInlineSnapshot({}, "\n        Object {\n          \"calculationAccent\": \"#deeddb\",\n          \"calculationBorder\": \"#319220\",\n          \"calculationFocus\": \"#83bd79\",\n          \"calculationInteractive\": \"#37a324\",\n          \"calculationPressed\": \"#27751a\",\n          \"calculationSubtle\": \"#eaf4e8\",\n          \"calculationText\": \"#FFFFFF\",\n          \"criticalAccent\": \"#f6dbde\",\n          \"criticalBorder\": \"#CC1F36\",\n          \"criticalFocus\": \"#e07886\",\n          \"criticalInteractive\": \"#dd223b\",\n          \"criticalPressed\": \"#ad1a2e\",\n          \"criticalSubtle\": \"#f9e8ea\",\n          \"criticalText\": \"#FFFFFF\",\n          \"dimensionAccent\": \"#dee6ef\",\n          \"dimensionBorder\": \"#31689E\",\n          \"dimensionFocus\": \"#83a4c4\",\n          \"dimensionInteractive\": \"#3672ae\",\n          \"dimensionPressed\": \"#295683\",\n          \"dimensionSubtle\": \"#eaeff5\",\n          \"dimensionText\": \"#FFFFFF\",\n          \"keyAccent\": \"#e7e0fa\",\n          \"keyBorder\": \"#6C43E0\",\n          \"keyFocus\": \"#a68eec\",\n          \"keyInteractive\": \"#7a55e3\",\n          \"keyPressed\": \"#5424db\",\n          \"keySubtle\": \"#f0ecfb\",\n          \"keyText\": \"#FFFFFF\",\n          \"measureAccent\": \"#f5e9dd\",\n          \"measureBorder\": \"#C2772E\",\n          \"measureFocus\": \"#daad81\",\n          \"measureInteractive\": \"#cf8135\",\n          \"measurePressed\": \"#a56527\",\n          \"measureSubtle\": \"#f8f1ea\",\n          \"measureText\": \"#FFFFFF\",\n          \"neutralAccent\": \"#e8e9e9\",\n          \"neutralBorder\": \"#71767a\",\n          \"neutralFocus\": \"#a9acaf\",\n          \"neutralInteractive\": \"#7b8085\",\n          \"neutralPressed\": \"#606467\",\n          \"neutralSubtle\": \"#f0f1f1\",\n          \"neutralText\": \"#FFFFFF\",\n        }\n      ");
    });
  });
});
//# sourceMappingURL=generateStatefulColors.spec.js.map