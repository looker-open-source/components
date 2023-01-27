"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plPL = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Do składnika zapytania nie przekazano żadnych elementów podrzędnych',
    'Query component received both dashboard and query props': 'Składnik zapytania otrzymał zarówno właściwości pulpitu nawigacyjnego, jak i zapytania'
  },
  QueryError: {
    Error: 'Błąd'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Wskaźniki typu „data” nie są obecnie obsługiwane',
    'No chart found for type "{{type}}"': 'Nie znaleziono wykresu dla typu „{{type}}”'
  }
};
var plPL = (0, _i18n.mergeLocaleObjects)([_components.plPL, _visualizationsAdapters.plPL, _visualizationsTable.plPL, _visualizationsVisx.plPL], 'pl-PL', resources);
exports.plPL = plPL;
//# sourceMappingURL=pl-PL.js.map