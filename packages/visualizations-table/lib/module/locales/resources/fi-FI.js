

import { fiFI as componentsLocale } from '@looker/components';
import { fiFI as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Lajittele lisäsarakkeet painamalla vaihtonäppäintä samalla, kun napsautat',
    'Sort ascending': 'Lajittele nousevassa järjestyksessä',
    'Sort descending': 'Lajittele laskevassa järjestyksessä',
    Totals: 'Summat'
  }
};
export const fiFI = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'fi-FI', resources);
//# sourceMappingURL=fi-FI.js.map