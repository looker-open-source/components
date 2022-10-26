import merge from 'lodash/merge';
import { ukUA as visAdapterLocales } from '@looker/visualizations-adapters';
import { ukUA as visTableLocales } from '@looker/visualizations-table';
import { ukUA as visVisxLocales } from '@looker/visualizations-visx';
const resources = {
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
export const ukUA = {
  locale: 'uk-UA',
  resources: {
    'uk-UA': merge({}, resources, visAdapterLocales.resources['uk-UA'], visTableLocales.resources['uk-UA'], visVisxLocales.resources['uk-UA'])
  }
};
//# sourceMappingURL=uk-UA.js.map