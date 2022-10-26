"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'クエリコンポーネントに渡された子はありません',
    'Query component received both dashboard and query props': 'クエリコンポーネントはダッシュボードとクエリの両方のプロパティを受け取りました'
  },
  QueryError: {
    Error: 'エラー'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "タイプ 'date' の Measure は現在サポートされていません",
    'No chart found for type "{{type}}"': 'タイプ「{{type}}」のチャートが見つかりません'
  }
};
var jaJP = {
  locale: 'ja-JP',
  resources: {
    'ja-JP': (0, _merge["default"])({}, resources, _visualizationsAdapters.jaJP.resources['ja-JP'], _visualizationsTable.jaJP.resources['ja-JP'], _visualizationsVisx.jaJP.resources['ja-JP'])
  }
};
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map