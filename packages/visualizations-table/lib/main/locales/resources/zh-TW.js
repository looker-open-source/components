"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhTW = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': '按住 Shift 再按一下以排序其他資料欄',
    'Sort ascending': '排序遞增',
    'Sort descending': '排序遞減',
    Totals: '總計'
  }
};
var zhTW = (0, _i18n.mergeLocaleObjects)([_components.zhTW, _visualizationsAdapters.zhTW], 'zh-TW', resources);
exports.zhTW = zhTW;
//# sourceMappingURL=zh-TW.js.map