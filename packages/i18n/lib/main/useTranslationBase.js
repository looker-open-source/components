"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslationBase = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _reactI18next = require("react-i18next");
var _i18nInitComponents = require("./i18nInitComponents");

var enResourcesMissing = function enResourcesMissing(en) {
  var nameSpaceArr = en.resources && Object.keys(en.resources);
  return nameSpaceArr === null || nameSpaceArr === void 0 ? void 0 : nameSpaceArr.some(function (ns) {
    return !_i18next["default"].hasResourceBundle('en', ns);
  });
};

var useTranslationBase = function useTranslationBase(en, ns, options) {
  var isEn = !_i18next["default"].language || _i18next["default"].language === 'en';
  if (isEn && enResourcesMissing(en)) {
    (0, _i18nInitComponents.i18nInitComponents)(en);
  }
  return (0, _reactI18next.useTranslation)(ns, options);
};
exports.useTranslationBase = useTranslationBase;
//# sourceMappingURL=useTranslationBase.js.map