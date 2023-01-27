

import { ukUA as componentsLocale } from '@looker/components';
import { ukUA as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { ukUA as visualizationstableLocale } from '@looker/visualizations-table';
import { ukUA as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const ukUA = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'uk-UA', resources);
//# sourceMappingURL=uk-UA.js.map