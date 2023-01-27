"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Yhtään lasta ei ole välitetty kyselykomponenttiin',
    'Query component received both dashboard and query props': 'Kyselykomponentti vastaanotti sekä hallintapaneeli- että kyselyominaisuuksia'
  },
  QueryError: {
    Error: 'Virhe'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": "Tyypin 'date' mittoja ei tällä hetkellä tueta",
    'No chart found for type "{{type}}"': 'Kaaviota ei löytynyt tyypille "{{type}}"'
  }
};
var fiFI = (0, _i18n.mergeLocaleObjects)([_components.fiFI, _visualizationsAdapters.fiFI, _visualizationsTable.fiFI, _visualizationsVisx.fiFI], 'fi-FI', resources);
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map