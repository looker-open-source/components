

import { ruRU as componentsLocale } from '@looker/components';
import { ruRU as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { ruRU as visualizationstableLocale } from '@looker/visualizations-table';
import { ruRU as visualizationsvisxLocale } from '@looker/visualizations-visx';
import { mergeLocaleObjects } from '@looker/i18n';
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
export const ruRU = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale, visualizationstableLocale, visualizationsvisxLocale], 'ru-RU', resources);
//# sourceMappingURL=ru-RU.js.map