

import dateLocale from 'date-fns/locale/he';
import { heIL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  PieLegend: {
    'Legend page {{page}} of {{totalPages}}': 'עמוד מקרא {{page}} מתוך {{totalPages}}'
  },
  PieLegendControls: {
    'Next page': 'העמוד הבא',
    'Previous page': 'העמוד הקודם'
  },
  XYTooltip: {
    'Points sized by': 'גודל הנקודות נקבע על פי'
  }
};
export const heIL = mergeLocaleObjects([visualizationsadaptersLocale], 'he-IL', resources, dateLocale);
//# sourceMappingURL=he-IL.js.map