"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocale = exports.dateFnLocaleMap = void 0;

var _arSA = _interopRequireDefault(require("date-fns/locale/ar-SA"));

var _cs = _interopRequireDefault(require("date-fns/locale/cs"));

var _da = _interopRequireDefault(require("date-fns/locale/da"));

var _de = _interopRequireDefault(require("date-fns/locale/de"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _es = _interopRequireDefault(require("date-fns/locale/es"));

var _fi = _interopRequireDefault(require("date-fns/locale/fi"));

var _frCA = _interopRequireDefault(require("date-fns/locale/fr-CA"));

var _fr = _interopRequireDefault(require("date-fns/locale/fr"));

var _he = _interopRequireDefault(require("date-fns/locale/he"));

var _hi = _interopRequireDefault(require("date-fns/locale/hi"));

var _it = _interopRequireDefault(require("date-fns/locale/it"));

var _ja = _interopRequireDefault(require("date-fns/locale/ja"));

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _lt = _interopRequireDefault(require("date-fns/locale/lt"));

var _nb = _interopRequireDefault(require("date-fns/locale/nb"));

var _nl = _interopRequireDefault(require("date-fns/locale/nl"));

var _pl = _interopRequireDefault(require("date-fns/locale/pl"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var _pt = _interopRequireDefault(require("date-fns/locale/pt"));

var _ru = _interopRequireDefault(require("date-fns/locale/ru"));

var _sv = _interopRequireDefault(require("date-fns/locale/sv"));

var _th = _interopRequireDefault(require("date-fns/locale/th"));

var _tr = _interopRequireDefault(require("date-fns/locale/tr"));

var _uk = _interopRequireDefault(require("date-fns/locale/uk"));

var _zhCN = _interopRequireDefault(require("date-fns/locale/zh-CN"));

var _zhTW = _interopRequireDefault(require("date-fns/locale/zh-TW"));

var dateFnLocaleMap = {
  'ar-SA': _arSA["default"],
  'cs-CZ': _cs["default"],
  'da-DK': _da["default"],
  'de-DE': _de["default"],
  en: _enUS["default"],
  'es-ES': _es["default"],
  'fi-FI': _fi["default"],
  'fr-CA': _frCA["default"],
  'fr-FR': _fr["default"],
  'he-IL': _he["default"],
  'hi-IN': _hi["default"],
  'it-IT': _it["default"],
  'ja-JP': _ja["default"],
  'ko-KR': _ko["default"],
  'lt-LT': _lt["default"],
  'nb-NO': _nb["default"],
  'nl-NL': _nl["default"],
  'pl-PL': _pl["default"],
  'pt-BR': _ptBR["default"],
  'pt-PT': _pt["default"],
  'ru-RU': _ru["default"],
  'sv-SE': _sv["default"],
  'th-TH': _th["default"],
  'tr-TR': _tr["default"],
  'uk-UA': _uk["default"],
  'zh-CN': _zhCN["default"],
  'zh-TW': _zhTW["default"]
};
exports.dateFnLocaleMap = dateFnLocaleMap;

var isLocaleCode = function isLocaleCode(str) {
  return str in dateFnLocaleMap;
};

var getLocale = function getLocale(locale) {
  return isLocaleCode(locale) ? dateFnLocaleMap[locale] : _enUS["default"];
};

exports.getLocale = getLocale;
//# sourceMappingURL=getLocale.js.map