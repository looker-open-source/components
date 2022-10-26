"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.i18nResources = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _components = require("@looker/components");

var _filterExpressions = require("@looker/filter-expressions");

var _merge = _interopRequireDefault(require("lodash/merge"));

var _csCZ = require("./resources/cs-CZ");

var _daDK = require("./resources/da-DK");

var _deDE = require("./resources/de-DE");

var _en = require("./resources/en");

var _esES = require("./resources/es-ES");

var _fiFI = require("./resources/fi-FI");

var _frCA = require("./resources/fr-CA");

var _frFR = require("./resources/fr-FR");

var _heIL = require("./resources/he-IL");

var _hiIN = require("./resources/hi-IN");

var _itIT = require("./resources/it-IT");

var _jaJP = require("./resources/ja-JP");

var _koKR = require("./resources/ko-KR");

var _ltLT = require("./resources/lt-LT");

var _nbNO = require("./resources/nb-NO");

var _nlNL = require("./resources/nl-NL");

var _plPL = require("./resources/pl-PL");

var _ptBR = require("./resources/pt-BR");

var _ptPT = require("./resources/pt-PT");

var _ruRU = require("./resources/ru-RU");

var _svSE = require("./resources/sv-SE");

var _thTH = require("./resources/th-TH");

var _trTR = require("./resources/tr-TR");

var _ukUA = require("./resources/uk-UA");

var _zhCN = require("./resources/zh-CN");

var _zhTW = require("./resources/zh-TW");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var i18nResources = (0, _merge["default"])({}, _components.i18nResources, _filterExpressions.i18nResources, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _csCZ.csCZ.resources), _daDK.daDK.resources), _deDE.deDE.resources), _en.en.resources), _esES.esES.resources), _fiFI.fiFI.resources), _frCA.frCA.resources), _frFR.frFR.resources), _heIL.heIL.resources), _hiIN.hiIN.resources), _itIT.itIT.resources), _jaJP.jaJP.resources), _koKR.koKR.resources), _ltLT.ltLT.resources), _nbNO.nbNO.resources), _nlNL.nlNL.resources), _plPL.plPL.resources), _ptBR.ptBR.resources), _ptPT.ptPT.resources), _ruRU.ruRU.resources), _svSE.svSE.resources), _thTH.thTH.resources), _trTR.trTR.resources), _ukUA.ukUA.resources), _zhCN.zhCN.resources), _zhTW.zhTW.resources));
exports.i18nResources = i18nResources;
//# sourceMappingURL=i18n_resources.js.map