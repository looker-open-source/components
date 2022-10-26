import merge from 'lodash/merge';
import { ruRU as visAdapterLocales } from '@looker/visualizations-adapters';
import { ruRU as visTableLocales } from '@looker/visualizations-table';
import { ruRU as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
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
export const ruRU = {
  locale: 'ru-RU',
  resources: {
    'ru-RU': merge({}, resources, visAdapterLocales.resources['ru-RU'], visTableLocales.resources['ru-RU'], visVisxLocales.resources['ru-RU'])
  }
};
//# sourceMappingURL=ru-RU.js.map