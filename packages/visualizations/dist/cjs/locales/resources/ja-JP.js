"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "クエリ コンポーネントに渡された子はありません",
    "Query component received both dashboard and query props": "クエリ コンポーネントが、ダッシュボードとクエリの両方のプロパティを受け取りました"
  },
  "QueryError": {
    "Error": "エラー"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "現在、「date」タイプの measure には対応していません",
    "No chart found for type \"{{type}}\"": "タイプ「{{type}}」のグラフは見つかりませんでした"
  }
};
var jaJP = (0, _i18n.mergeLocaleObjects)([_components.jaJP, _visualizationsAdapters.jaJP, _visualizationsTable.jaJP, _visualizationsVisx.jaJP], 'ja-JP', resources);
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map