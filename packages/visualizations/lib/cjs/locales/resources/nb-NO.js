"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nbNO = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var nbNO = {
  locale: 'nb-NO',
  resources: {
    'nb-NO': (0, _merge["default"])({}, resources, _visualizationsAdapters.nbNO.resources['nb-NO'], _visualizationsTable.nbNO.resources['nb-NO'], _visualizationsVisx.nbNO.resources['nb-NO'])
  }
};
exports.nbNO = nbNO;
//# sourceMappingURL=nb-NO.js.map