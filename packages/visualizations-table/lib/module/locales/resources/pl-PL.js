

import { plPL as componentsLocale } from '@looker/components';
import { plPL as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Naciśnij klawisz Shift i kliknij, aby sortować dodatkowe kolumny',
    'Sort ascending': 'Sortuj w kolejności rosnącej',
    'Sort descending': 'Sortuj w kolejności malejącej',
    Totals: 'Sumy'
  }
};
export const plPL = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'pl-PL', resources);
//# sourceMappingURL=pl-PL.js.map