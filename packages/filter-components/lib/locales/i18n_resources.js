import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { i18nResources as componentsResources } from '@looker/components';
import { i18nResources as expressionResources } from '@looker/filter-expressions';
import merge from 'lodash/merge';
import { csCZ } from './resources/cs-CZ';
import { daDK } from './resources/da-DK';
import { deDE } from './resources/de-DE';
import { en } from './resources/en';
import { esES } from './resources/es-ES';
import { fiFI } from './resources/fi-FI';
import { frCA } from './resources/fr-CA';
import { frFR } from './resources/fr-FR';
import { heIL } from './resources/he-IL';
import { hiIN } from './resources/hi-IN';
import { itIT } from './resources/it-IT';
import { jaJP } from './resources/ja-JP';
import { koKR } from './resources/ko-KR';
import { ltLT } from './resources/lt-LT';
import { nbNO } from './resources/nb-NO';
import { nlNL } from './resources/nl-NL';
import { plPL } from './resources/pl-PL';
import { ptBR } from './resources/pt-BR';
import { ptPT } from './resources/pt-PT';
import { ruRU } from './resources/ru-RU';
import { svSE } from './resources/sv-SE';
import { thTH } from './resources/th-TH';
import { trTR } from './resources/tr-TR';
import { ukUA } from './resources/uk-UA';
import { zhCN } from './resources/zh-CN';
import { zhTW } from './resources/zh-TW';
export const i18nResources = merge({}, componentsResources, expressionResources, _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, csCZ.resources), daDK.resources), deDE.resources), en.resources), esES.resources), fiFI.resources), frCA.resources), frFR.resources), heIL.resources), hiIN.resources), itIT.resources), jaJP.resources), koKR.resources), ltLT.resources), nbNO.resources), nlNL.resources), plPL.resources), ptBR.resources), ptPT.resources), ruRU.resources), svSE.resources), thTH.resources), trTR.resources), ukUA.resources), zhCN.resources), zhTW.resources));
//# sourceMappingURL=i18n_resources.js.map