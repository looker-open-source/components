"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _defaults = require("../defaults");
var _generateBlendColors = require("./generateBlendColors");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var specifiableColors = _objectSpread(_objectSpread({}, _defaults.defaultCoreColors), _defaults.defaultIntentColors);
describe('generateBlendColors', function () {
  test('default', function () {
    expect((0, _generateBlendColors.generateBlendColors)(specifiableColors)).toMatchInlineSnapshot({}, "\n      Object {\n        \"text1\": \"#9da0a3\",\n        \"text2\": \"#71767a\",\n        \"text3\": \"#555b5f\",\n        \"text4\": \"#40464b\",\n        \"text5\": \"#262D33\",\n        \"ui1\": \"#f4f4f4\",\n        \"ui2\": \"#e0e0e0\",\n        \"ui3\": \"#c4c4c4\",\n        \"ui4\": \"#a8a8a8\",\n        \"ui5\": \"#262626\",\n      }\n    ");
  });
  test('dark mode', function () {
    expect((0, _generateBlendColors.generateBlendColors)(_objectSpread(_objectSpread({}, specifiableColors), {}, {
      background: specifiableColors.text,
      text: specifiableColors.background
    }))).toMatchInlineSnapshot({}, "\n      Object {\n        \"text1\": \"#878b8e\",\n        \"text2\": \"#b3b5b7\",\n        \"text3\": \"#cfd0d2\",\n        \"text4\": \"#e4e5e6\",\n        \"text5\": \"#FFFFFF\",\n        \"ui1\": \"#33393f\",\n        \"ui2\": \"#4d5257\",\n        \"ui3\": \"#707579\",\n        \"ui4\": \"#94989b\",\n        \"ui5\": \"#fff\",\n      }\n    ");
  });
});
//# sourceMappingURL=generateBlendColors.spec.js.map