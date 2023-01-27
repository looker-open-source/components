"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thTH = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'ไม่มีรายการรองที่ส่งผ่านไปยังองค์ประกอบการสืบค้น',
    'Query component received both dashboard and query props': 'องค์ประกอบการสืบค้นได้รับคุณสมบัติของทั้งแดชบอร์ดและการสืบค้น'
  },
  QueryError: {
    Error: 'ข้อผิดพลาด'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'ขณะนี้ไม่รองรับค่าวัดประเภท "วันที่"',
    'No chart found for type "{{type}}"': 'ไม่พบแผนภูมิสำหรับประเภท "{{type}}"'
  }
};
var thTH = (0, _i18n.mergeLocaleObjects)([_components.thTH, _visualizationsAdapters.thTH, _visualizationsTable.thTH, _visualizationsVisx.thTH], 'th-TH', resources);
exports.thTH = thTH;
//# sourceMappingURL=th-TH.js.map