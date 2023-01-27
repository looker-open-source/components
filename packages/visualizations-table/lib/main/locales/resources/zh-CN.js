"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhCN = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': '按 Shift 键并单击，对其他列进行排序',
    'Sort ascending': '按升序排序',
    'Sort descending': '按降序排序',
    Totals: '总计'
  }
};
var zhCN = (0, _i18n.mergeLocaleObjects)([_components.zhCN, _visualizationsAdapters.zhCN], 'zh-CN', resources);
exports.zhCN = zhCN;
//# sourceMappingURL=zh-CN.js.map