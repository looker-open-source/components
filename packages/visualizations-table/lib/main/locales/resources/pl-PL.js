"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Naciśnij klawisz Shift i kliknij, aby sortować dodatkowe kolumny',
    'Sort ascending': 'Sortuj w kolejności rosnącej',
    'Sort descending': 'Sortuj w kolejności malejącej',
    Totals: 'Sumy'
  }
};
var plPL = (0, _i18n.mergeLocaleObjects)([_components.plPL, _visualizationsAdapters.plPL], 'pl-PL', resources);
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map