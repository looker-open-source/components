"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thTH = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + Click เพื่อจัดเรียงคอลัมน์เพิ่มเติม',
    'Sort ascending': 'จัดเรียงจากน้อยไปมาก',
    'Sort descending': 'จัดเรียงจากมากไปน้อย',
    Totals: 'ยอดรวม'
  }
};
var thTH = (0, _i18n.mergeLocaleObjects)([_components.thTH, _visualizationsAdapters.thTH], 'th-TH', resources);
exports.thTH = thTH;
//# sourceMappingURL=th-TH.js.map