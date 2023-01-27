"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiIN = void 0;
var _hi = _interopRequireDefault(require("date-fns/locale/hi"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': '{{totalPages}} में से {{page}} लीजेंड पेज'
  },
  PieLegendControls: {
    'Next page': 'अगला पेज',
    'Previous page': 'पिछला पेज'
  },
  XYTooltip: {
    'Points sized by': 'आकार के आधार पर पॉइंट'
  }
};
var hiIN = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.hiIN], 'hi-IN', resources, _hi["default"]);
exports.hiIN = hiIN;
//# sourceMappingURL=hi-IN.js.map