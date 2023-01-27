"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csCZ = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Stisknutím Shift a současným kliknutím lze seřadit další sloupce',
    'Sort ascending': 'Seřadit vzestupně',
    'Sort descending': 'Seřadit sestupně',
    Totals: 'Součty'
  }
};
var csCZ = (0, _i18n.mergeLocaleObjects)([_components.csCZ, _visualizationsAdapters.csCZ], 'cs-CZ', resources);
exports.csCZ = csCZ;
//# sourceMappingURL=cs-CZ.js.map