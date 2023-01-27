"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeLocaleObjects = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var mergeLocaleObjects = function mergeLocaleObjects(locales, localeString, translations, dateLocale) {
  var translationsArr = locales.map(function (locale) {
    return locale.resources[localeString];
  });
  var mergedTranslations = Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2["default"])(translationsArr), [translations]));
  var dateLocaleObject = dateLocale ? {
    dateLocale: dateLocale
  } : {};
  return Object.assign.apply(Object, [{
    locale: localeString
  }, dateLocaleObject].concat((0, _toConsumableArray2["default"])(locales), [{
    resources: (0, _defineProperty2["default"])({}, localeString, mergedTranslations)
  }]));
};
exports.mergeLocaleObjects = mergeLocaleObjects;
//# sourceMappingURL=mergeLocaleObjects.js.map