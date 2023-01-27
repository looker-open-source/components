"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daDK = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Skift + klik for at sortere yderligere kolonner',
    'Sort ascending': 'Sortér stigende',
    'Sort descending': 'Sortér faldende',
    Totals: 'Totaler'
  }
};
var daDK = (0, _i18n.mergeLocaleObjects)([_components.daDK, _visualizationsAdapters.daDK], 'da-DK', resources);
exports.daDK = daDK;
//# sourceMappingURL=da-DK.js.map