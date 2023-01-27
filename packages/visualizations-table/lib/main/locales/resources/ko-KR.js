"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koKR = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': '더 많은 열을 정렬하려면 Shift를 누르고 클릭',
    'Sort ascending': '오름차순으로 정렬',
    'Sort descending': '내림차순으로 정렬',
    Totals: '총계'
  }
};
var koKR = (0, _i18n.mergeLocaleObjects)([_components.koKR, _visualizationsAdapters.koKR], 'ko-KR', resources);
exports.koKR = koKR;
//# sourceMappingURL=ko-KR.js.map