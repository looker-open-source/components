"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.koKR = void 0;
var _ko = _interopRequireDefault(require("date-fns/locale/ko"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '범례 페이지 {{page}}/{{totalPages}}'
  },
  PieLegendControls: {
    'Next page': '다음 페이지',
    'Previous page': '이전 페이지'
  },
  XYTooltip: {
    'Points sized by': '점수 크기 지정 기준'
  }
};
var koKR = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.koKR], 'ko-KR', resources, _ko["default"]);
exports.koKR = koKR;
//# sourceMappingURL=ko-KR.js.map