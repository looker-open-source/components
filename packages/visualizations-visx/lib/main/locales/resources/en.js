"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.en = void 0;
var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legend page {{page}} of {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Next page',
    'Previous page': 'Previous page'
  },
  XYTooltip: {
    'Points sized by': 'Points sized by'
  }
};
var en = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.en], 'en', resources, _enUS["default"]);
exports.en = en;
//# sourceMappingURL=en.js.map