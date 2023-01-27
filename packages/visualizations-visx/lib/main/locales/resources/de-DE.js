"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deDE = void 0;
var _de = _interopRequireDefault(require("date-fns/locale/de"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legend Seite {{page}} von {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Nächste Seite',
    'Previous page': 'Vorherige Seite'
  },
  XYTooltip: {
    'Points sized by': 'Punktgröße nach'
  }
};
var deDE = (0, _i18n.mergeLocaleObjects)([_visualizationsAdapters.deDE], 'de-DE', resources, _de["default"]);
exports.deDE = deDE;
//# sourceMappingURL=de-DE.js.map