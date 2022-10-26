"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nlNL = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var nlNL = {
  locale: 'nl-NL',
  resources: {
    'nl-NL': (0, _merge["default"])({}, resources, _visualizationsAdapters.nlNL.resources['nl-NL'], _visualizationsTable.nlNL.resources['nl-NL'], _visualizationsVisx.nlNL.resources['nl-NL'])
  }
};
exports.nlNL = nlNL;
//# sourceMappingURL=nl-NL.js.map