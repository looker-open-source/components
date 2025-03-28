"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhCN = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");
var resources = {
  "Query": {
    "No children passed to Query component": "没有子项传递给查询组件",
    "Query component received both dashboard and query props": "查询组件同时收到了信息中心和查询属性"
  },
  "QueryError": {
    "Error": "错误"
  },
  "Visualization": {
    "Measures of type 'date' are currently not supported": "目前不支持“日期”类型的测量",
    "No chart found for type \"{{type}}\"": "找不到“{{type}}”类型的图表"
  }
};
var zhCN = (0, _i18n.mergeLocaleObjects)([_components.zhCN, _visualizationsAdapters.zhCN, _visualizationsTable.zhCN, _visualizationsVisx.zhCN], 'zh-CN', resources);
exports.zhCN = zhCN;
//# sourceMappingURL=zh-CN.js.map