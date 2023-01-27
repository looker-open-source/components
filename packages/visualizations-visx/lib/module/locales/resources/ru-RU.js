

import dateLocale from 'date-fns/locale/ru';
import { ruRU as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Страница легенды: {{page}} из {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Следующая страница',
    'Previous page': 'Предыдущая страница'
  },
  XYTooltip: {
    'Points sized by': 'Точки отсортированы по'
  }
};
export const ruRU = mergeLocaleObjects([visualizationsadaptersLocale], 'ru-RU', resources, dateLocale);
//# sourceMappingURL=ru-RU.js.map