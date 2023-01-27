"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Geen subonderdelen doorgevoerd naar querycomponent',
    'Query component received both dashboard and query props': 'Queryonderdeel heeft zowel dashboard- als queryeigenschappen ontvangen'
  },
  QueryError: {
    Error: 'Fout'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Meetwaarden van het type Datum worden momenteel niet ondersteund',
    'No chart found for type "{{type}}"': 'Geen grafiek gevonden voor type {{type}}'
  }
};
var nlNL = (0, _i18n.mergeLocaleObjects)([_components.nlNL, _visualizationsAdapters.nlNL, _visualizationsTable.nlNL, _visualizationsVisx.nlNL], 'nl-NL', resources);
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map