"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ltLT = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': '„Shift + Click“, jei norite rūšiuoti papildomus stulpelius',
    'Sort ascending': 'Didėjančia tvarka',
    'Sort descending': 'Mažėjančia tvarka',
    Totals: 'Sumos'
  }
};
var ltLT = (0, _i18n.mergeLocaleObjects)([_components.ltLT, _visualizationsAdapters.ltLT], 'lt-LT', resources);
exports.ltLT = ltLT;
//# sourceMappingURL=lt-LT.js.map