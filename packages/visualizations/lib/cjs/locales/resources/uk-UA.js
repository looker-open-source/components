"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ukUA = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

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
var ukUA = {
  locale: 'uk-UA',
  resources: {
    'uk-UA': (0, _merge["default"])({}, resources, _visualizationsAdapters.ukUA.resources['uk-UA'], _visualizationsTable.ukUA.resources['uk-UA'], _visualizationsVisx.ukUA.resources['uk-UA'])
  }
};
exports.ukUA = ukUA;
//# sourceMappingURL=uk-UA.js.map