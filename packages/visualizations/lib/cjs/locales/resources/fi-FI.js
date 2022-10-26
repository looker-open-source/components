"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fiFI = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var fiFI = {
  locale: 'fi-FI',
  resources: {
    'fi-FI': (0, _merge["default"])({}, resources, _visualizationsAdapters.fiFI.resources['fi-FI'], _visualizationsTable.fiFI.resources['fi-FI'], _visualizationsVisx.fiFI.resources['fi-FI'])
  }
};
exports.fiFI = fiFI;
//# sourceMappingURL=fi-FI.js.map