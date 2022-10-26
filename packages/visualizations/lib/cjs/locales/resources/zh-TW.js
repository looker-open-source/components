"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': '沒有傳遞至查詢元件的子項目',
    'Query component received both dashboard and query props': 'Dashboard 和查詢屬性接收到的查詢元件'
  },
  QueryError: {
    Error: '錯誤'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": '目前不支援的「日期」類型量值',
    'No chart found for type "{{type}}"': '沒有「{{type}}」類型的圖表'
  }
};
var zhTW = {
  locale: 'zh-TW',
  resources: {
    'zh-TW': (0, _merge["default"])({}, resources, _visualizationsAdapters.zhTW.resources['zh-TW'], _visualizationsTable.zhTW.resources['zh-TW'], _visualizationsVisx.zhTW.resources['zh-TW'])
  }
};
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map