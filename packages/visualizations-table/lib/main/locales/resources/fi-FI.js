"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _i18n = require("@looker/i18n");

var resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Lajittele lisäsarakkeet painamalla vaihtonäppäintä samalla, kun napsautat',
    'Sort ascending': 'Lajittele nousevassa järjestyksessä',
    'Sort descending': 'Lajittele laskevassa järjestyksessä',
    Totals: 'Summat'
  }
};
var fiFI = (0, _i18n.mergeLocaleObjects)([_components.fiFI, _visualizationsAdapters.fiFI], 'fi-FI', resources);
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map