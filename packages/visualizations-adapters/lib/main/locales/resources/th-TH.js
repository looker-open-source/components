"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thTH = void 0;
var _components = require("@looker/components");
var _i18n = require("@looker/i18n");

var resources = {
  Debug: {
    Config: 'กำหนดค่า',
    Dimensions: 'มิติ',
    Error: 'ข้อผิดพลาด',
    Measures: 'ค่าวัด',
    Result: 'ผลลัพธ์',
    error: 'ข้อผิดพลาด',
    ok: 'ตกลง'
  },
  ErrorBoundary: {
    'Something went wrong': 'มีสิ่งผิดปกติเกิดขึ้น'
  },
  translation: {
    'Row Total': 'ยอดรวมของแถว',
    "false": 'เท็จ',
    "null": 'เป็นค่าว่าง',
    "true": 'จริง',
    undefined: 'ไม่ได้กำหนด'
  },
  useNormalizedPivotLabels: {
    'Row Total': 'ยอดรวมของแถว'
  }
};
var thTH = (0, _i18n.mergeLocaleObjects)([_components.thTH], 'th-TH', resources);
exports.thTH = thTH;
//# sourceMappingURL=th-TH.js.map