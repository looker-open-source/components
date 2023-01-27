

import dateLocale from 'date-fns/locale/da';
import { daDK as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Forklaringsside {{page}} af {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Næste side',
    'Previous page': 'Forrige side'
  },
  XYTooltip: {
    'Points sized by': 'Størrelse af punkter efter'
  }
};
export const daDK = mergeLocaleObjects([visualizationsadaptersLocale], 'da-DK', resources, dateLocale);
//# sourceMappingURL=da-DK.js.map