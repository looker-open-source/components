

import dateLocale from 'date-fns/locale/nl';
import { nlNL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Legendapagina {{page}} van {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Volgende pagina',
    'Previous page': 'Vorige pagina'
  },
  XYTooltip: {
    'Points sized by': 'Punten ingepast op basis van'
  }
};
export const nlNL = mergeLocaleObjects([visualizationsadaptersLocale], 'nl-NL', resources, dateLocale);
//# sourceMappingURL=nl-NL.js.map