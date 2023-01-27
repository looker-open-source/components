

import { jaJP as componentsLocale } from '@looker/components';
import { jaJP as visualizationsadaptersLocale } from '@looker/visualizations-adapters';
import { mergeLocaleObjects } from '@looker/i18n';
const resources = {
  Table: {
    'Shift + Click to sort additional columns': 'Shift + クリックで、追加の列を並べ替えます',
    'Sort ascending': '昇順で並べ替え',
    'Sort descending': '降順で並べ替え',
    Totals: '合計'
  }
};
export const jaJP = mergeLocaleObjects([componentsLocale, visualizationsadaptersLocale], 'ja-JP', resources);
//# sourceMappingURL=ja-JP.js.map