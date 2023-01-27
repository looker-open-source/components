

import dateLocale from 'date-fns/locale/lt';
import { ltLT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legendos psl. {{page}} iš {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Kitas puslapis',
    'Previous page': 'Ankstesnis puslapis'
  },
  XYTooltip: {
    'Points sized by': 'Taškų dydis pagal'
  }
};
export const ltLT = mergeLocaleObjects([visualizationsadaptersLocale], 'lt-LT', resources, dateLocale);
//# sourceMappingURL=lt-LT.js.map