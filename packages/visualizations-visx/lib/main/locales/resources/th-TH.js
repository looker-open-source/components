"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thTH = void 0;
var _th = _interopRequireDefault(require("date-fns/locale/th"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'หน้าคำอธิบาย {{page}} จาก {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'หน้าถัดไป',
    'Previous page': 'หน้าก่อนหน้า'
  },
  XYTooltip: {
    'Points sized by': 'กำหนดขนาดจุดโดย'
  }
};
var thTH = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.thTH], 'th-TH', resources, _th["default"]);
exports.thTH = thTH;
//# sourceMappingURL=th-TH.js.map