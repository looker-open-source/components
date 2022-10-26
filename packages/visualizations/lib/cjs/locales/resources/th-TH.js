"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thTH = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var thTH = {
  locale: 'th-TH',
  resources: {
    'th-TH': (0, _merge["default"])({}, resources, _visualizationsAdapters.thTH.resources['th-TH'], _visualizationsTable.thTH.resources['th-TH'], _visualizationsVisx.thTH.resources['th-TH'])
  }
};
exports.thTH = thTH;
//# sourceMappingURL=th-TH.js.map