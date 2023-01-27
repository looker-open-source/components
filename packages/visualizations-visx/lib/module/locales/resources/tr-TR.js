

import dateLocale from 'date-fns/locale/tr';
import { trTR as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Gösterge sayfa {{page}}/{{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Sonraki sayfa',
    'Previous page': 'Önceki sayfa'
  },
  XYTooltip: {
    'Points sized by': 'Puan ölçütü'
  }
};
export const trTR = mergeLocaleObjects([visualizationsadaptersLocale], 'tr-TR', resources, dateLocale);
//# sourceMappingURL=tr-TR.js.map