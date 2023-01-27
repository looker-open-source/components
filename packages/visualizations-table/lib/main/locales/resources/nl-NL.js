"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + klik om aanvullende kolommen te sorteren',
    'Sort ascending': 'Oplopend sorteren',
    'Sort descending': 'Aflopend sorteren',
    Totals: 'Totalen'
  }
};
var nlNL = (0, _i18n.mergeLocaleObjects)([_components.nlNL, _visualizationsAdapters.nlNL], 'nl-NL', resources);
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map