"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ruRU = void 0;

var _merge = _interopRequireDefault(require("lodash/merge"));

var _visualizationsAdapters = require("@looker/visualizations-adapters");

var _visualizationsTable = require("@looker/visualizations-table");

var _visualizationsVisx = require("@looker/visualizations-visx");

var resources = {
  Query: {
    'No children passed to Query component': 'Нет дочерних элементов, переданных в компонент запросов Query',
    'Query component received both dashboard and query props': 'Компонент запросов Query получил свойства панелей мониторинга и запросов'
  },
  QueryError: {
    Error: 'Ошибка'
  },
  Visualization: {
    "Measures of type 'date' are currently not supported": 'Поля measure типа date в настоящее время не доступны',
    'No chart found for type "{{type}}"': 'График для типа «{{type}}» не обнаружен'
  }
};
var ruRU = {
  locale: 'ru-RU',
  resources: {
    'ru-RU': (0, _merge["default"])({}, resources, _visualizationsAdapters.ruRU.resources['ru-RU'], _visualizationsTable.ruRU.resources['ru-RU'], _visualizationsVisx.ruRU.resources['ru-RU'])
  }
};
exports.ruRU = ruRU;
//# sourceMappingURL=ru-RU.js.map