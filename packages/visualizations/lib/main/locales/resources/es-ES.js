"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.esES = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'No se pasó ningún elemento secundario al componente de consulta.',
    'Query component received both dashboard and query props': 'El componente de consulta recibió propiedades de dashboard y de consulta.'
  },
  QueryError: {
    Error: 'Error'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Actualmente no se admiten las medidas del tipo "fecha".',
    'No chart found for type "{{type}}"': 'No se encontró ningún gráfico para el tipo "{{type}}"'
  }
};
var esES = (0, _i18n.mergeLocaleObjects)([_components.esES, _visualizationsAdapters.esES, _visualizationsTable.esES, _visualizationsVisx.esES], 'es-ES', resources);
exports.esES = esES;
//# sourceMappingURL=es-ES.js.map