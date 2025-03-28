"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koKR = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "쿼리 구성요소에 전달된 하위 항목이 없습니다.",
    "Query component received both dashboard and query props": "쿼리 구성요소에서 대시보드와 쿼리 속성을 둘 다 수신했습니다."
  },
  "QueryError": {
    "Error": "오류"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "'date' 유형의 측정은 현재 지원되지 않습니다.",
    "No chart found for type \"{{type}}\"": "\"{{type}}\" 유형에 대한 차트를 찾을 수 없습니다."
  }
};
var koKR = (0, _i18n.mergeLocaleObjects)([_components.koKR, _visualizationsAdapters.koKR, _visualizationsTable.koKR, _visualizationsVisx.koKR], 'ko-KR', resources);
exports.koKR = koKR;
//# sourceMappingURL=ko-KR.js.map