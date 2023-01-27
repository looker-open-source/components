"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ukUA = void 0;
var _components = require("@looker/components");
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _visualizationsTable = require("@looker/visualizations-table");
var _visualizationsVisx = require("@looker/visualizations-visx");
var _i18n = require("@looker/i18n");

var resources = {
  Query: {
    'No children passed to Query component': 'Компоненту запиту не передано жодних дочірніх об’єктів',
    'Query component received both dashboard and query props': 'Компонент запиту отримав властивості як приладної дошки, так і запиту'
  },
  QueryError: {
    Error: 'Помилка'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Міри типу «дата» наразі не підтримуються',
    'No chart found for type "{{type}}"': 'Для типу «{{type}}» не знайдено діаграми'
  }
};
var ukUA = (0, _i18n.mergeLocaleObjects)([_components.ukUA, _visualizationsAdapters.ukUA, _visualizationsTable.ukUA, _visualizationsVisx.ukUA], 'uk-UA', resources);
exports.ukUA = ukUA;
//# sourceMappingURL=uk-UA.js.map