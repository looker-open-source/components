"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nbNO = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Ingen underordnede elementer ble sendt til spørrings-komponenten',
    'Query component received both dashboard and query props': 'Spørringskomponenten mottok både instrumentbord og spørringsrekvisitter'
  },
  QueryError: {
    Error: 'Feil'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Mål av typen dato støttes for øyeblikket ikke',
    'No chart found for type "{{type}}"': 'Ingen diagrammer funnet for type «{{type}}»'
  }
};
var nbNO = (0, _i18n.mergeLocaleObjects)([_components.nbNO, _visualizationsAdapters.nbNO, _visualizationsTable.nbNO, _visualizationsVisx.nbNO], 'nb-NO', resources);
exports.nbNO = nbNO;
//# sourceMappingURL=nb-NO.js.map