"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jaJP = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + クリックで、追加の列を並べ替えます',
    'Sort ascending': '昇順で並べ替え',
    'Sort descending': '降順で並べ替え',
    Totals: '合計'
  }
};
var jaJP = (0, _i18n.mergeLocaleObjects)([_components.jaJP, _visualizationsAdapters.jaJP], 'ja-JP', resources);
exports.jaJP = jaJP;
//# sourceMappingURL=ja-JP.js.map