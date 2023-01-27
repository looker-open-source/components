"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svSE = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Skift + klicka för att sortera ytterligare kolumner',
    'Sort ascending': 'Sortera stigande',
    'Sort descending': 'Sortera fallande',
    Totals: 'Totalsummor'
  }
};
var svSE = (0, _i18n.mergeLocaleObjects)([_components.svSE, _visualizationsAdapters.svSE], 'sv-SE', resources);
exports.svSE = svSE;
//# sourceMappingURL=sv-SE.js.map