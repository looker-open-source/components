"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = void 0;

var _i18n = require("@looker/i18n");

var _locales = require("../locales");

var useTranslation = function useTranslation(ns, options) {
  return (0, _i18n.useTranslationBase)(_locales.en, ns, options);
};

exports.useTranslation = useTranslation;
//# sourceMappingURL=useTranslation.js.map