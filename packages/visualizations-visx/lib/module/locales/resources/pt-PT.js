

import dateLocale from 'date-fns/locale/pt';
import { ptPT as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'Página de legenda {{page}} de {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'Próxima página',
    'Previous page': 'Página anterior'
  },
  XYTooltip: {
    'Points sized by': 'Pontos calibrados por'
  }
};
export const ptPT = mergeLocaleObjects([visualizationsadaptersLocale], 'pt-PT', resources, dateLocale);
//# sourceMappingURL=pt-PT.js.map